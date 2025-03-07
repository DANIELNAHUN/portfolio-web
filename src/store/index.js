import axios from "axios";
import { createStore } from 'vuex';

const api_ = import.meta.env.VITE_APP_API
const token_ = import.meta.env.VITE_APP_TOKEN

const apiClient = axios.create({
    baseURL: api_,
    headers: { 'Content-Type': 'application/json', },
});

apiClient.interceptors.request.use(config =>{
    const token = token_;
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
        config.headers.apikey = token
        return config;
    }
})

const store = createStore({
    state:{
        me: {},
        projects: [],
        technologies: [],
        titles: [ "Web Fullstack Developer", "ETL Engineer", "RPA Developer" ],
        techbyprojects:[]
    },
    getters:{

    },
    mutations:{
        setPersonalInfo(state, me){
            state.me = me[0];
        },
        setTitles(state, titles){
            state.titles = titles;
        },
        setSkills(state, skills){
            state.technologies = skills;
        },
        setProjects(state, projects){
            state.projects = projects;
        },
        setTechByProjects(state, techbyprojects){
            state.techbyprojects = techbyprojects;
        }
    },
    actions:{
        async getMe({commit}){
            try{
                const res = await apiClient.get(api_+'/me?select=*');
                if(res.status === 200){
                    commit('setPersonalInfo', res.data);
                }
            } catch(error){
                console.log(error)
            }
        },
        async getTitles({commit}){
            try{
                const res = await apiClient.get(api_+'/titles?select=title');
                if(res.status === 200){
                    const titles = res.data.map(item => item.title);
                    commit('setTitles', titles);
                }
            } catch(error){
                console.log(error)
            }
        },
        async getSkills({commit}){
            try{
                const res = await apiClient.get(api_+'/technologies?select=technology,tag');
                if(res.status === 200){
                    commit('setSkills', res.data);
                }
            }
            catch(error){
                console.log(error)
            }
        },
        async getProjects({commit}){
            try{
                const res = await apiClient.get(api_+'/projects?select=*');
                if(res.status === 200){
                    const projects = res.data;
                    projects.forEach(async element => {
                        const res2 = await apiClient.get(api_+'/techsbyproject?select=fk_tech&fk_project=eq.'+element.id);
                        const techs = res2.data.map(item => item.fk_tech);
                        if(res2.status === 200){
                            element.tags = techs;
                        }
                    });
                    commit('setProjects', projects);
                }
            }
            catch(error){
                console.log(error)
            }
        },
        async getTechByProjects({commit}){
            try{
                const res = await apiClient.get(api_+'/techsbyproject?select=*');
                if(res.status === 200){
                    commit('setTechByProjects', res.data);
                }
            }
            catch(error){
                console.log(error)
            }
        }
    },
    modules:{

    }
});

export default store;