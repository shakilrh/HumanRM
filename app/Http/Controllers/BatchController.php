<?php

namespace App\Http\Controllers;

use App\Branch;
use App\Batch;
use Illuminate\Http\Request;
use App\DataTables\BranchDataTable;
use App\DataTables\BatchDataTable;
use Brian2694\Toastr\Facades\Toastr;

class BatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param BranchDataTable $dataTable
     * @return \Illuminate\Http\Response
     */
    public function index(BatchDataTable $dataTable)
    {
        return $dataTable->render('batch.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('batch.form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $batch = new Batch();
        $batch->batch_code=$request->batch_code;
        $batch->start_date=$request->start_date;
        $batch->end_date=$request->end_date;
        $batch->save();
        Toastr::success('Branch Successfully Saved :)', 'Success');
        return response()->json([
            'data'   => $batch,
            'redirect' => route('batch.index')
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Batch  $branch
     * @return \Illuminate\Http\Response
     */
    public function show(Batch $batch)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Batch  $branch
     * @return \Illuminate\Http\Response
     */
    public function edit(Batch $batch)
    {
        return view('batch.form', compact('batch'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Batch  $branch
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Batch $batch)
    {
        $this->validate($request, [
            'name' => 'required|sometimes|unique:batch,name,'.$batch->id,
        ]);
        $batch->batch_code=$request->batch_code;
        $batch->start_date=$request->start_date;
        $batch->end_date=$request->end_date;
        $batch->save();
        Toastr::success('Batch Successfully update :)', 'Success');
        return response()->json([
            'data'   => $batch,
            'redirect' => route('batch.index')
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Batch  $branch
     * @return \Illuminate\Http\Response
     */
    public function destroy(Batch $batch)
    {
        $batch->delete();
        Toastr::success('Batch Successfully Deleted :)', 'Success');
        return redirect()->back();
    }
}
