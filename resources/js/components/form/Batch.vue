<template>
    <div id="form">
        <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
            <!-- Alert -->
<!--            <div class="pr-2 pl-2">
            </div>-->
            <alert-error :form="form"></alert-error>

            <div class="card-body">
                <div class="form-group">
                    <label for="name">Batch Code <span class="required-field">*</span></label>
                    <input v-model="form.batch_code" type="text" name="name" id="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" placeholder="Enter Batch Code"  required autofocus>
                    <has-error :form="form" field="name"></has-error>
                </div>
               <div class="form-row">
                 <div class="col">
                  <div class="form-group">
                   
                    <label for="address">Start Date <span class="required-field">*</span></label>
                    <input v-model="form.start_date" type="date" name="date_of_join" id="date_of_join" class="datepicker form-control"  placeholder="Start date" >
                    <has-error :form="form" field="address"></has-error>
                    </div>
                </div>
                <div class="col">
                <div class="form-group">
                     
                    <label for="phone">End Date</label>
                   <input v-model="form.end_date" type="date" name="end_date" id="end_date" class="datepicker form-control"  placeholder="End date" >
                    <has-error :form="form" field="end_date"></has-error>
                     </div>
                </div>
               </div>

            </div>
            <!-- /.card-body -->

            <div class="card-footer">
                <a :href="url" class="btn btn-danger pull-right">
                    <i class="fas fa-chevron-circle-left"></i>
                    <span>Back</span>
                </a>
                <button type="submit" class="btn btn-primary">
                    <i v-if="form.busy" class="fas fa-spinner fa-spin"></i>
                    <i v-else class="fas fa-paper-plane"></i>
                    <span>Submit</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
        props:['batch','action','url'],
        
        data () {
            return {
                editMode: false,
                form: new Form({
                    batch_code: '',
                    start_date: '',
                    end_date: ''
                    
                }),
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData(){
                if (this.$props.batch != null)
                {
                    this.editMode = true
                    this.form.fill(this.$props.batch)
                }
            },
            store () {
                this.$Progress.start();
                this.form.busy = true;
                // Submit the form via a POST request
                this.form.post(this.$props.action)
                    .then(response => {
                        if (this.form.successful) {
                            this.$Progress.finish()
                            // console.log(response)
                            location.href = response.data.redirect;
                        } else {
                            this.$Progress.fail()
                        }
                    })
                    .catch(e => {
                        console.log(e)
                        this.$Progress.fail()
                    })
            },
            update(){
                this.$Progress.start();
                this.form.busy = true;
                // Submit the form via a POST request
                this.form.put(this.$props.action)
                    .then(response => {
                        if (this.form.successful) {
                            this.$Progress.finish()
                            // console.log(response)
                            location.href = response.data.redirect;
                        } else {
                            this.$Progress.fail()
                        }
                    })
                    .catch(e => {
                        console.log(e)
                        this.$Progress.fail()
                    })
            }
        }
        
    }

</script>

