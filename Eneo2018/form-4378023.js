/*Code used for the form: form-4378023 in 123formbuilder*/
var dropdown_cid = '25540687';
$(document).ready(function (e) {
    if(window.location.href.indexOf(dropdown_textarea_form_id) > -1) {
        $('#id123-control'+dropdown_cid).change(function () {
            fill_textarea($(this).val());
        });
    }
    
function fill_textarea(val)
{
    val = $( '#id123-control'+dropdown_cid ).val();
    switch(val) {
        case "Request":
            $( '#id123-control'+textarea_cid ).css("background-color","#2BAF2B");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Proposal":
            $( '#id123-control'+textarea_cid ).css("background-color","#1BA8CE");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Suggestion":
            $( '#id123-control'+textarea_cid ).css("background-color","#FFC83E");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
            break;
        default:
            $( '#id123-control'+textarea_cid ).css("background-color","#FFE9E9");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
    }
    var textarea_message_value = 'This is a demo message for subject "'+val+'", adding a nice background color and a suited font color.';
    $( '#id123-control'+textarea_cid ).val( textarea_message_value ) ;
}
