/** processForm: get data from form and make AJAX call to our API. */

function processForm(evt) {

    $(document).ready(function(){
        $('form').submit(function(e) {
            e.preventDefault();
        });
    });
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
    
}


$("#lucky-form").on("submit", processForm);
