<template>
  <div>
    <draggable element="div" class="col-md-12" v-model="$store.state.categories" :options="dragOptions">
        <transition-group class="row">
            <div class="col-md-4 mb-3" v-for="element in $store.state.categories" :key="element.id">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{element.name}}</h4>
                    </div>
                    <div class="card-body card-body-dark">
                        <draggable :options="dragOptions" element="div" @end="changeOrder" v-model="$store.state.tasks">
                            <transition-group :id="element.id">
                                <div v-for="task in $store.state.tasks" :key="task.category_id+','+task.order" class="transit-1" :id="task.id">
                                    <div v-if="task.category_id == element.id" class="small-card">
                                        <textarea v-if="task === editingTask" class="form-control text-input" @keyup.enter="endEditing(task)" @blur="endEditing(task)" v-model="task.name"></textarea>
                                        <label for="checkbox" v-if="task !== editingTask" @click="editTask(task)">{{ task.name }}</label>
                                        <hr>
                                    </div>
                                </div>
                            </transition-group>
                        </draggable>
                        <div class="small-card">
                            <h5 class="text-center" @click="addNew(element.id)">Add new card</h5>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: "Task",
    components: {
        draggable
    },
    data() {
        return {
            order: Number,
            editingTask : null,

        }
    },
    methods: {
        changeOrder(data){
            console.log(data)
        },
        endEditing(task) {
            this.editingTask = null
            this.$store.editTask(task)
        },
        editTask(task){
            this.editingTask = task;
        },
        addNew(id) {
            this.getCategoryTasks(id);
            const data = {
                id: this.$uid(),
                name: "New task",
                category_id: id,
                order: this.order
            }
            this.$store.set('tasks', data)
        },
        getCategoryTasks(id) {
            this.order = 1
            this.$store.state.tasks.forEach(task => {
                if (task.category_id == id) {
                    this.order += 1
                }
            });
        }
    },
    computed: {
        dragOptions () {
          return  {
            animation: 1,
            group: 'description',
            ghostClass: 'ghost'
          };
        },
    }, 
}
</script>

<style>

</style>