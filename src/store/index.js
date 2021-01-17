import Vue from 'vue';
import db from '../db';


const CATEGORY_DB = 'todo_category';
const TASK_DB = 'todo_tasks';

const store = Vue.observable({
    state: {
      categories: [],
      tasks: [],
      user: [],
      error: []
    },
    set(database, data) {
        if(database == 'categories') {
            let cate = new db(CATEGORY_DB);
            try {
                this.state.categories.push(data);
                cate.create(this.state.categories);
                
            } catch(e) {
                console.log(e);
            }
        } else if(database == 'tasks') {
            let tasks = new db(TASK_DB);
            try {
                this.state.tasks.push(data);
                tasks.create(this.state.tasks);
            } catch(e) {
                console.log(e);
            }
        } else {
            console.error("Database name: '"+database+"' does not exist");
        }
    },
    get(database) {
        if(database == 'categories') {
            let cate = new db(CATEGORY_DB);

            this.state.categories = cate.get()    

        } else if(database == 'tasks') {
            let tasks = new db(TASK_DB);

            this.state.tasks = tasks.get();
        } else {
            console.error("Database name: '"+database+"' does not exist");
        }
    },
    editTask(task) {        
            let tasks = new db(TASK_DB);

            this.state.tasks.splice(task.id, 1, task);
          
            tasks.create(this.state.tasks);
        
    },
    delete(database, index) { // This function will not be called if store state does not exist
        if(database == 'categories') {
            let cate = new db(CATEGORY_DB);

            let items = cate.get();
            items.splice(index, 1);
            cate.create(items);
            this.get(database);

        } else if(database == 'tasks') {
            let tasks = new db(TASK_DB);

            let items = tasks.get();
            items.splice(index, 1);
            tasks.create(items);
            this.get(database);
        } else {
            console.error("Database name: '"+database+"' does not exist");
        }
    }  
});


export default store;