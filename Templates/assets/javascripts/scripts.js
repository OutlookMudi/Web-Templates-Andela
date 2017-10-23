(function () {
    $(document).ready(function () {
        $('#form-review').hide(); // default review form to closes state

        // display review form when link is clicked
        $('.js-write-review').click(function (event) {
            event.preventDefault();
            $('#form-review').show();
        });

        // close review form
        $('.js-close').click(function (event) {
            event.preventDefault();
            $('#form-review').hide();
        });

        // open edit recipe modal
        $('.js-edit').click(function (event) {
            event.preventDefault();
            $('#edit-recipe').modal('show');
        });

        // open add recipe modal
        $('.js-add-recipe').click(function (event) {
            event.preventDefault();
            $('#add-recipe').modal('show');
        });

        // open preview recipe modal
        $('.js-preview-recipe').click(function (event) {
            event.preventDefault();
            $('#preview-recipe').modal('show');
        });

        // open recipe delete confirmation modal
        $('.js-trash').click(function (event) {
            event.preventDefault();
            $('#delete-recipe').modal('show');
        });
    });
})();