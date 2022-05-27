$(document).ready(function () {
    $("#message").validate({
        rules: {
            fname:{
                required: true,
                minlength:3
            },
            eAaddress:{
                required:true,
                email:true
            },
            sub:{
                required:true,
                maxlength:10
            }

        }
    })
})