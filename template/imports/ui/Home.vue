<template>
    <div>
        <div style="text-align: center; margin-top: 15px;">
            <q-btn color="primary" @click="clickMethod()">
                Add a record
            </q-btn>
        </div>
        <div style="margin-top: 25px;">
        <q-list striped>
            <q-list-header>Striped star list</q-list-header>
            <q-item v-for="item in starRecords" :key="item._id">
                <q-item-main>
                    {{ item.name }}
                </q-item-main>
            </q-item>
        </q-list>
        </div>
        <div style="text-align: center; margin-top: 15px;">
            <q-btn color="primary" @click="add_doc()">
                Add a doc
            </q-btn>
        </div>
        <div style="margin-top: 25px;">
        <q-list striped>
            <q-list-header>Striped doc list</q-list-header>
            <q-item v-for="item in docRecords" :key="item._id">
                <q-item-main>
                    {{ item._id }}
                </q-item-main>
            </q-item>
        </q-list>
        </div>
    </div>
</template>

<script>
    import { Meteor } from 'meteor/meteor';
    import { Stars } from '/imports/lib/collections';
    import { Docs } from '/imports/lib/collections';

    import { QList, QListHeader, QBtn, QItem, QItemMain } from '/node_modules/quasar-framework/dist/quasar.mat.common.js';


    export default {
        data() {
            return {
                starNames: ['Dog Star', 'Sirius', 'Pole Star', 'Sun', 'Arthur'],
                counter: -1
            }
        },
        components: {
            QList,
            QListHeader,
            QBtn,
            QItem,
            QItemMain
        },
        meteor: {
            starRecords: {
                params() {
                    return null;
                },
                update () {
                    var starsFound = Stars.find();
                    if(starsFound.count() > this.starNames.length){
                        starsFound.forEach(function(doc, index){
                            Stars.remove({_id: doc._id});
                        });
                        this.counter = -1;
                        alert('starting again ..');
                    }
                    return starsFound;
                }
            },
            docRecords: {
                params() {
                    return null;
                },
                update () {
                    var docsFound = Docs.find();
                    return docsFound;
                }
            }
        },
        methods: {
            clickMethod() {
                if(this.counter < this.starNames.length - 1) {
                    Stars.insert({name: this.starNames[this.getCounter()]});
                }else{
                    alert('There are only five stars')
                }
            },
            add_doc() {
                Docs.insert({});
            },
            getCounter () {
                if(this.counter >= this.starNames.length - 1){
                    console.log('starNames', starNames);
                     return -1;
                }
                this.counter++;
                return this.counter;
            }
        },
        created() {
            this.$subscribe('stars');
            this.$subscribe('docs');
        }
    }

</script>