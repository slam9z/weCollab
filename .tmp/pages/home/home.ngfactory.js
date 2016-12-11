/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import14 from 'ionic-angular/config/config';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from 'ionic-angular/navigation/view-controller';
import * as import17 from 'ionic-angular/components/app/app';
import * as import18 from 'ionic-angular/platform/platform';
import * as import19 from 'ionic-angular/navigation/deep-linker';
import * as import20 from 'ionic-angular/util/keyboard';
import * as import21 from '@angular/core/src/zone/ng_zone';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from 'ionic-angular/gestures/gesture-controller';
import * as import24 from 'ionic-angular/transitions/transition-controller';
import * as import25 from 'ionic-angular/components/toolbar/toolbar';
import * as import26 from 'ionic-angular/components/tabs/tab';
import * as import27 from 'ionic-angular/components/tabs/tabs';
export var Wrapper_HomePage = (function () {
    function Wrapper_HomePage(p0) {
        this.changed = false;
        this.context = new import0.HomePage(p0);
    }
    Wrapper_HomePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HomePage;
}());
var renderType_HomePage_Host = null;
var _View_HomePage_Host0 = (function (_super) {
    __extends(_View_HomePage_Host0, _super);
    function _View_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage_Host0, renderType_HomePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-home', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController));
        this._appEl_0.initComponent(this._HomePage_0_4.context, [], compView_0);
        compView_0.create(this._HomePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomePage) && (0 === requestNodeIndex))) {
            return this._HomePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage_Host0;
}(import1.AppView));
function viewFactory_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage_Host === null)) {
        (renderType_HomePage_Host = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomePageNgFactory = new import10.ComponentFactory('page-home', viewFactory_HomePage_Host0, import0.HomePage);
var styles_HomePage = [];
var renderType_HomePage = null;
var _View_HomePage0 = (function (_super) {
    __extends(_View_HomePage0, _super);
    function _View_HomePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage0, renderType_HomePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import16.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n\n', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this._appEl_3 = new import3.AppElement(3, null, this, this._el_3);
        var compView_3 = import12.viewFactory_Tabs0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Tabs_3_4 = new import12.Wrapper_Tabs(this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import16.ViewController, null), this.parentInjector.get(import17.App), this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_3), this.parentInjector.get(import18.Platform), this.renderer, this.parentInjector.get(import19.DeepLinker));
        this._appEl_3.initComponent(this._Tabs_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n    ', null);
        this._el_5 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_5, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_5, 'tabIcon', 'home');
        this.renderer.setElementAttribute(this._el_5, 'tabTitle', 'My Services');
        this._appEl_5 = new import3.AppElement(5, 3, this, this._el_5);
        var compView_5 = import13.viewFactory_Tab0(this.viewUtils, this.injector(5), this._appEl_5);
        this._Tab_5_4 = new import13.Wrapper_Tab(this._Tabs_3_4.context, this.parentInjector.get(import17.App), this.parentInjector.get(import14.Config), this.parentInjector.get(import20.Keyboard), new import15.ElementRef(this._el_5), this.parentInjector.get(import21.NgZone), this.renderer, this.parentInjector.get(import22.ComponentFactoryResolver), compView_5.ref, this.parentInjector.get(import23.GestureController), this.parentInjector.get(import24.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_5.initComponent(this._Tab_5_4.context, [], compView_5);
        compView_5.create(this._Tab_5_4.context, [], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
        this._el_7 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_7, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_7, 'tabIcon', 'text');
        this.renderer.setElementAttribute(this._el_7, 'tabTitle', 'Message');
        this._appEl_7 = new import3.AppElement(7, 3, this, this._el_7);
        var compView_7 = import13.viewFactory_Tab0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Tab_7_4 = new import13.Wrapper_Tab(this._Tabs_3_4.context, this.parentInjector.get(import17.App), this.parentInjector.get(import14.Config), this.parentInjector.get(import20.Keyboard), new import15.ElementRef(this._el_7), this.parentInjector.get(import21.NgZone), this.renderer, this.parentInjector.get(import22.ComponentFactoryResolver), compView_7.ref, this.parentInjector.get(import23.GestureController), this.parentInjector.get(import24.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_7.initComponent(this._Tab_7_4.context, [], compView_7);
        compView_7.create(this._Tab_7_4.context, [], null);
        this._text_8 = this.renderer.createText(null, '\n    ', null);
        this._el_9 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_9, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_9, 'tabIcon', 'stats');
        this.renderer.setElementAttribute(this._el_9, 'tabTitle', 'Notification');
        this._appEl_9 = new import3.AppElement(9, 3, this, this._el_9);
        var compView_9 = import13.viewFactory_Tab0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Tab_9_4 = new import13.Wrapper_Tab(this._Tabs_3_4.context, this.parentInjector.get(import17.App), this.parentInjector.get(import14.Config), this.parentInjector.get(import20.Keyboard), new import15.ElementRef(this._el_9), this.parentInjector.get(import21.NgZone), this.renderer, this.parentInjector.get(import22.ComponentFactoryResolver), compView_9.ref, this.parentInjector.get(import23.GestureController), this.parentInjector.get(import24.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_9.initComponent(this._Tab_9_4.context, [], compView_9);
        compView_9.create(this._Tab_9_4.context, [], null);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_11, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_11, 'tabIcon', 'image');
        this.renderer.setElementAttribute(this._el_11, 'tabTitle', 'Me');
        this._appEl_11 = new import3.AppElement(11, 3, this, this._el_11);
        var compView_11 = import13.viewFactory_Tab0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Tab_11_4 = new import13.Wrapper_Tab(this._Tabs_3_4.context, this.parentInjector.get(import17.App), this.parentInjector.get(import14.Config), this.parentInjector.get(import20.Keyboard), new import15.ElementRef(this._el_11), this.parentInjector.get(import21.NgZone), this.renderer, this.parentInjector.get(import22.ComponentFactoryResolver), compView_11.ref, this.parentInjector.get(import23.GestureController), this.parentInjector.get(import24.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_11.initComponent(this._Tab_11_4.context, [], compView_11);
        compView_11.create(this._Tab_11_4.context, [], null);
        this._text_12 = this.renderer.createText(null, '\n', null);
        compView_3.create(this._Tabs_3_4.context, [[].concat([
                this._text_4,
                this._el_5,
                this._text_6,
                this._el_7,
                this._text_8,
                this._el_9,
                this._text_10,
                this._el_11,
                this._text_12
            ])], null);
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_18 = import7.UNINITIALIZED;
        this._expr_19 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_HomePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Header_0_3.context;
        }
        if (((token === import26.Tab) && (5 === requestNodeIndex))) {
            return this._Tab_5_4.context;
        }
        if (((token === import26.Tab) && (7 === requestNodeIndex))) {
            return this._Tab_7_4.context;
        }
        if (((token === import26.Tab) && (9 === requestNodeIndex))) {
            return this._Tab_9_4.context;
        }
        if (((token === import26.Tab) && (11 === requestNodeIndex))) {
            return this._Tab_11_4.context;
        }
        if (((token === import27.Tabs) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Tabs_3_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Tabs_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        var currVal_0 = this.context.tab1Root;
        this._Tab_5_4.check_root(currVal_0, throwOnChange, false);
        var currVal_1 = 'My Services';
        this._Tab_5_4.check_tabTitle(currVal_1, throwOnChange, false);
        var currVal_2 = 'home';
        this._Tab_5_4.check_tabIcon(currVal_2, throwOnChange, false);
        this._Tab_5_4.detectChangesInternal(this, this._el_5, throwOnChange);
        var currVal_5 = this.context.tab2Root;
        this._Tab_7_4.check_root(currVal_5, throwOnChange, false);
        var currVal_6 = 'Message';
        this._Tab_7_4.check_tabTitle(currVal_6, throwOnChange, false);
        var currVal_7 = 'text';
        this._Tab_7_4.check_tabIcon(currVal_7, throwOnChange, false);
        this._Tab_7_4.detectChangesInternal(this, this._el_7, throwOnChange);
        var currVal_10 = this.context.tab3Root;
        this._Tab_9_4.check_root(currVal_10, throwOnChange, false);
        var currVal_11 = 'Notification';
        this._Tab_9_4.check_tabTitle(currVal_11, throwOnChange, false);
        var currVal_12 = 'stats';
        this._Tab_9_4.check_tabIcon(currVal_12, throwOnChange, false);
        this._Tab_9_4.detectChangesInternal(this, this._el_9, throwOnChange);
        var currVal_15 = this.context.tab4Root;
        this._Tab_11_4.check_root(currVal_15, throwOnChange, false);
        var currVal_16 = 'Me';
        this._Tab_11_4.check_tabTitle(currVal_16, throwOnChange, false);
        var currVal_17 = 'image';
        this._Tab_11_4.check_tabIcon(currVal_17, throwOnChange, false);
        this._Tab_11_4.detectChangesInternal(this, this._el_11, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_3 = this._Tab_5_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementAttribute(this._el_5, 'id', ((currVal_3 == null) ? null : currVal_3.toString()));
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this._Tab_5_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementAttribute(this._el_5, 'aria-labelledby', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        var currVal_8 = this._Tab_7_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_7, 'id', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this._Tab_7_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_7, 'aria-labelledby', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        var currVal_13 = this._Tab_9_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementAttribute(this._el_9, 'id', ((currVal_13 == null) ? null : currVal_13.toString()));
            this._expr_13 = currVal_13;
        }
        var currVal_14 = this._Tab_9_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_9, 'aria-labelledby', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        var currVal_18 = this._Tab_11_4.context._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setElementAttribute(this._el_11, 'id', ((currVal_18 == null) ? null : currVal_18.toString()));
            this._expr_18 = currVal_18;
        }
        var currVal_19 = this._Tab_11_4.context._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementAttribute(this._el_11, 'aria-labelledby', ((currVal_19 == null) ? null : currVal_19.toString()));
            this._expr_19 = currVal_19;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_HomePage0.prototype.destroyInternal = function () {
        this._Tabs_3_4.context.ngOnDestroy();
    };
    return _View_HomePage0;
}(import1.AppView));
export function viewFactory_HomePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage === null)) {
        (renderType_HomePage = viewUtils.createRenderComponentType('', 0, import9.ViewEncapsulation.None, styles_HomePage, {}));
    }
    return new _View_HomePage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.ngfactory.js.map