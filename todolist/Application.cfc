component {
    this.name = "TodoApp";
    this.applicationTimeout = createTimeSpan(0,2,0,0);
    this.datasource = "todoDB";
    this.ormEnabled = true;
    this.ormSettings = {
        cfcLocation = "models",
        dbCreate = "update",
        autoManageSession = false
    };

    function onApplicationStart() {
        application.todoService = new services.TodoService();
        return true;
    }
}