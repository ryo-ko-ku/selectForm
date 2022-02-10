// JavaScript source code

$(function () {


    $(".option-btn").click(function () {
        let optionText = $(this).text();

        let clickedOption = $(this).attr("data-option");

        $("#text-form").val(optionText + "���D���ȗ��R��");
        $("#select-form").val(clickedOption);
    });

    $("#form").submit(function () {
        let selectItem = $("#select-form").val();
        let textItem = $("#text-form").val();
        if (textItem == "") {
            $("#error-message").text("���R���L�����Ă�������");
        } else {
            $("#error-message").text("");
        }
        $("#output-select").text(selectItem);
        $("#output-text").text(textItem);
        return false;
    });
});