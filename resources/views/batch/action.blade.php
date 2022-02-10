<a class="btn btn-primary btn-sm" href="{{ route('batch.edit',$id) }}"><i class="fas fa-edit"></i></a>
<button type="button" class="btn btn-danger btn-sm" onclick="deleteData({{ $id }})"><i class="fas fa-trash-alt"></i></button>
<form id="delete-form-{{ $id }}" action="{{ route('batch.destroy',$id) }}" method="POST" style="display: none;">
    @csrf()
    @method('DELETE')
</form>
