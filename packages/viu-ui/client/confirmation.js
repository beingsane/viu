export default {
    $el: undefined,
    $title: undefined,
    $message: undefined,
    $buttonConfirm: undefined,
    $buttonCancel: undefined,
    run(message, callbackConfirm = function() {}, callbackCancel = function() {}, title = "Confirm", confirmText = "Confirm", cancelText = "Cancel") {
        let self = this;
        if (!this.$el) { this.$el = $('#confirmationDialogforPlugin'); }
        if (!this.$message) { this.$message = this.$el.find(".dialog-message"); }
        if (!this.$title) { this.$title = this.$el.find(".dialog-title"); }
        if (!this.$buttonConfirm) { this.$buttonConfirm = this.$el.find(".dialog-confirm-button"); }
        if (!this.$buttonCancel) { this.$buttonCancel = this.$el.find(".dialog-cancel-button"); }

        self.$title.html(title);
        self.$message.html(message);
        this.$buttonConfirm.html(confirmText);
        this.$buttonCancel.html(cancelText);
        self.$el.addClass("front");
        self.$el.addClass("enable");
        this.$buttonConfirm.one("click", function() {
            callbackConfirm();
        });

        this.$buttonCancel.one("click", function() {
            callbackCancel();
        });
    }
};