component {
    public function init() {
        return this;
    }
    
    public array function getAllTodos() {
        return entityLoad("Todo");
    }
    
    public Todo function getTodoById(required numeric id) {
        return entityLoadByPK("Todo", arguments.id);
    }
    
    public void function saveTodo(required Todo todo) {
        entitySave(arguments.todo);
        ormFlush();
    }
    
    public void function deleteTodo(required numeric id) {
        var todo = getTodoById(arguments.id);
        if (!isNull(todo)) {
            entityDelete(todo);
            ormFlush();
        }
    }
}