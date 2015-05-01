cruddly.service('DataSource', function () {
    var dataBase = [];
    var id = 1;
    return {
        create: function (newPerson) {
            newPerson.id = id++;
            dataBase.push(newPerson);
        },
        read: function () {
            return dataBase;
        },
        getById: function (id) {
            var id = parseInt(id);
            var foundPerson = _.findWhere(dataBase, {'id': id});
            return foundPerson;
        },
        update: function (model) {
            var foundIndex = dataBase.indexOf(model);
           
            dataBase[foundIndex] = model;
        },
        remove: function (model) {
            var removeIndex = dataBase.indexOf(model);
            dataBase.splice(removeIndex, 1);
        }
    };
});