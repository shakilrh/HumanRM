<?php

namespace App\DataTables;

use App\Designation;
use App\Branch;
use App\Batch;
use Yajra\DataTables\EloquentDataTable;
use Yajra\DataTables\Services\DataTable;

class BatchDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param mixed $query Results from query() method.
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        $dataTable = new EloquentDataTable($query);
        return $dataTable
            ->addColumn('action', 'batch.action');
    }

    /**
     * Get query source of dataTable.
     *
     * @param \App\Batch $model
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function query(Batch $model)
    {
        return $model->newQuery()->select('id','batch_code','start_date','end_date')
            ->orderByDesc('id');
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        return $this->builder()
                    ->columns($this->getColumns())
                    ->minifiedAjax()
                    ->addAction(['width' => '80px'])
                    ->parameters([
                        'dom'          => 'Bfrtip',
                        'buttons'      => ['print', 'pdf', 'excel', 'csv', 'reset', 'reload'],
                        'initComplete' => "function () {
                            this.api().columns().every(function () {
                                var column = this;
                                var input = document.createElement(\"input\");
                                $(input).addClass(\"form-control form-control-sm\")
                                $(input).appendTo($(column.footer()).empty())
                                .on('change', function () {
                                    column.search($(this).val(), false, false, true).draw();
                                });
                            });
                        }",
                    ]);
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            'id',
            'batch_code',
            'start_date',
            'end_date'
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Batch_' . date('YmdHis');
    }
}
