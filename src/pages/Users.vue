<template>
  <q-page-container>
    <q-page padding>
      <div class="column" style="height: 15px">
        <div class="col"></div>
      </div>
      <div class="q-pa-md">
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
        </q-input>
        <div v-if="$q.screen.gt.xs" class="col">
          <q-toggle v-model="visibleColumns" val="calories" label="Chat_id" />
          <q-toggle v-model="visibleColumns" val="fat" label="Login" />
          <q-toggle v-model="visibleColumns" val="carbs" label="Password" />
          <q-toggle v-model="visibleColumns" val="protein" label="Address" />
          <q-toggle v-model="visibleColumns" val="sodium" label="Label" />
          <q-toggle v-model="visibleColumns" val="calcium" label="Balance" />
          <q-toggle v-model="visibleColumns" val="iron" label="Total" />
        </div>
        <q-select
          v-else
          v-model="visibleColumns"
          multiple
          borderless
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          style="min-width: 150px"
        />
        <div class="col-2 q-table__title">Users</div>

        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          dark
          :selected-rows-label="getSelectedString"
          selection="multiple"
          :selected.sync="selected"
          :visible-columns="visibleColumns"
          :filter="filter"


        />
        <div class="q-mt-md">
          Selected: {{ JSON.stringify(selected) }}
        </div>
      </div>
      <div class="col-md-6">
      <h4>Users List</h4>
      <ul class="list-group">
       <li class="list-group-item"
         :class="{ active: index == currentIndex }"
         v-for="(user, index) in users"
         :key="index"
       >
         {{ user.title }}
       </li>
     </ul>
   </div>

    </q-page>
  </q-page-container>
</template>


<script>
import DataService from "../services/DataService";

export default {
  data () {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: "",
      filter: '',
      selected: [],
      visibleColumns: [ 'calories', 'desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron' ],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'User',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Chat_id', field: 'calories', sortable: true },
        { name: 'fat', label: 'Login', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Password', field: 'carbs',sortable: true },
        { name: 'protein', label: 'Address', field: 'protein',sortable: true },
        { name: 'sodium', label: 'Label', field: 'sodium',sortable: true },
        { name: 'calcium', label: 'Balance', field: 'calcium', sortable: true},
        { name: 'iron', label: 'Total', field: 'iron', sortable: true}
      ],
      data: [
        {
          name: 'testtest',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          name: 'newadmin',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          name: 'test9',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          name: 'test1100',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          name: 'test10',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          name: 'test11',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          name: 'test12',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
    retrieveUsers() {
      DataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
     this.retrieveUsers();
     this.currentUser = null;
     this.currentIndex = -1;
   },
},
mounted() {
this.retrieveUsers();
}

  }

</script>
