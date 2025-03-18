
<script setup>
import { ref, watch, computed, onMounted } from "vue";
import { useStore } from "vuex";
import DataView from 'primevue/dataview';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Button from 'primevue/button';

const store = useStore()

const props = defineProps({
  paginator: {Boolean, default: false},
  layout: {String, default: 'grid'}
})
const featuredProjects = computed(()=> store.state.projects)
const techs = computed(()=> store.state.technologies)
const projects = ref([])
const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
    {label: 'Price High to Low', value: '!price'},
    {label: 'Price Low to High', value: 'price'},
]);
const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf('!') === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    }
    else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

const updateNameTags = () => featuredProjects.value.forEach( project => {
  let listtechnologies = project.tags;
  let techsObject = techs.value;
  let techNames = listtechnologies.map(tech => {
    let techName = techsObject.find(techObject => techObject.id === tech);
    return techName.technology;
  });
  projects.value.push({ ...project, tags: techNames });
});

const layout = ref(props.layout);
const options = ref(['list', 'grid']);


const getCategory = (project) => {
    switch (project.category) {
        case 'Backend':
            return 'info';
        case 'Frontend':
            return 'info';
        case 'Fullstack':
            return 'success';
        default:
            return 'warn';
    }
}

watch([featuredProjects, techs],([newFeaturedProjects, newTechs]) =>{
  if (newFeaturedProjects.length && newTechs.length) {
    projects.value = [];
    updateNameTags();
  }
});

onMounted(() => {
  if (featuredProjects.value.length<1) {
    store.dispatch('getProjects');
  }
  if (techs.value.length<1) {
    store.dispatch('getSkills');
  }
});

</script>

<template>
    <div class="card">
        <DataView :value="projects" :layout="layout" :paginator="paginator" :rows="4" >
            <template #header>
                <div class="flex justify-end">
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
                            <i :class="[option === 'list' ? 'pi pi-bars' : 'pi pi-table']" />
                        </template>
                    </SelectButton>
                    <!-- <Select v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Category" @change="onSortChange($event)"/> -->
                </div>
            </template>

            <template #list="slotProps">
                <div class="item-list">
                    <div v-for="(item, index) in slotProps.items" :key="item.id">
                        <div class="icard" :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="tag">
                                <img :src="item.image" :alt="item.title" />
                                 <div class="category" style="left: 4px; top: 4px">
                                    <Tag :value="item.category" :severity="getCategory(item)"></Tag>
                                </div>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <div>
                                        <div class="c-title">{{ item.title }}</div>
                                    </div>
                                </div>
                                <div class="description">
                                    <span>{{ item.description }}</span>
                                    <div class="project-tags">
                                        <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{tag}}</span>
                                    </div>
                                </div>                                
                                <div class="action">
                                    <Button icon="pi pi-eye" label="View Project" :disabled="!item.status_published" style="flex: 0 1 auto; white-space: nowrap;"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="item-grid">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="icontainer">
                        <div class="icard">
                            <div class="tag">
                                <div class="cimg">
                                    <img :src="item.image" :alt="item.title" style="max-width: 300px"/>
                                    <div class="category" style="left: 4px; top: 4px">
                                        <Tag :value="item.category" :severity="getCategory(item)"></Tag>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <div class="title">
                                    <div>
                                        <div class="c-title">{{ item.title }}</div>
                                    </div>
                                </div>
                                <div class="description">
                                    <span>{{ item.description }}</span>
                                </div>
                                <div class="project-tags">
                                    <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex">{{tag}}</span>
                                </div>
                            </div>                            
                        </div>
                        <div class="action">
                            <Button icon="pi pi-eye" label="View Project" :disabled="!item.status_published" style="flex: 0 1 auto; white-space: nowrap;"></Button>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
</template>

