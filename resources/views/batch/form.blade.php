@extends('layouts.app')

@section('title','Batch')

@push('css')

@endpush

@section('content')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>{{ isset($batch) ? 'Edit' : 'Add New' }} Batch</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="{{ route('batch.index') }}">Batch</a></li>
                        <li class="breadcrumb-item active">{{ isset($user) ? 'Update' : 'Create' }}</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row">
                <!-- left column -->
                <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary card-outline">
                        <!-- form start -->
                        <batch-form
                            :batch="{{ isset($batch) ? json_encode($batch->toArray()) : json_encode(null)}}"
                            :action="{{ isset($batch) ? json_encode(route('batch.update',$batch->id)) : json_encode(route('batch.store')) }}"
                            :url="{{ json_encode(route('batch.index')) }}">
                        </batch-form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
            <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection

@push('js')

@endpush
