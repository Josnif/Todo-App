<template>
  <div>
    <draggable element="div" class="col-md-12" v-model="$store.state.categories" :options="dragOptions">
        <transition-group class="row">
            <div class="col-md-4 mb-3" v-for="(element, index) in $store.state.categories" :key="element.id">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">{{element.name}}</h4>
                        <span class="delete-button del-cate" @click="deleteAction('categories',index)"><i class="fas fa-trash"></i></span>

                    </div>
                    <div class="card-body card-body-dark">
                        <draggable :options="dragOptions" element="div" @end="changeOrder" v-model="$store.state.tasks">
                            <transition-group :id="element.id">
                                <div v-for="(task, index) in $store.state.tasks" :key="task.category_id+','+task.order" class="transit-1" :id="task.id">
                                    <div v-if="task.category_id == element.id" class="small-card">
                                        <textarea v-if="task === editingTask" class="form-control text-input" @keyup.enter="endEditing()" @blur="endEditing()" v-model="task.name"></textarea>
                                        <label for="checkbox" v-if="task !== editingTask" @click="editTask(task)">{{ task.name }}</label>
                                        <span class="delete-button" @click="deleteAction('tasks',index)"><i class="fas fa-trash"></i></span>
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
            // let toTask = data.to
            // let fromTask = data.from
            // let task_id = data.item.id
            // let category_id = fromTask.id == toTask.id ? null : toTask.id
            // let order = data.newIndex == data.oldIndex ? false : data.newIndex

            // if (order !== false) {
                
            // }
            console.log(data);
            console.log(this.$store.state.tasks)// Check if the tasks state changed as order changes
        },
        endEditing() {
            this.editingTask = null
            this.$store.editTask();
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
        },
        deleteAction(database, id) {
            this.$store.delete(database, id)
        }
    },
    created() {
        console.log(this.$store.state.tasks)
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
 .delete-button {
     position:absolute;
     right: 10px;
     color: rgb(179, 18, 18);
 }
 .del-cate {
     top: 10px
 }
</style>