component persistent="true" table="todos" {
    property name="id" generator="native" ormtype="integer" fieldtype="id";
    property name="title" ormtype="string" length="200";
    property name="description" ormtype="string" length="1000";
    property name="completed" ormtype="boolean" default="false";
    property name="createdAt" ormtype="timestamp";
}