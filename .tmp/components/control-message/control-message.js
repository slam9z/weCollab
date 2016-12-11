import { Component, Input } from '@angular/core';
import { ValidationService } from '../../providers/providers';
export var ControlMessageComponent = (function () {
    function ControlMessageComponent() {
    }
    Object.defineProperty(ControlMessageComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    ControlMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control-message',
                    template: "<ion-label *ngIf=\"errorMessage !== null\" color=\"danger\" padding-left>{{errorMessage}}</ion-label>"
                },] },
    ];
    /** @nocollapse */
    ControlMessageComponent.ctorParameters = [];
    ControlMessageComponent.propDecorators = {
        'control': [{ type: Input },],
    };
    return ControlMessageComponent;
}());
//# sourceMappingURL=control-message.js.map