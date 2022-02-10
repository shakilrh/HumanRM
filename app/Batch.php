<?php

namespace App;

use App\Traits\ModelScopes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Batch extends Model
{
    use ModelScopes;
}