import React from 'react';
import {connect}  from 'react-redux';

import ConfigActions from 'actions/config-actions';
import i18n from 'lib-app/i18n';
import ToggleButton from 'app-components/toggle-button';
import AreYouSure from 'app-components/are-you-sure';

import Button from 'core-components/button';
import FileUploader from 'core-components/file-uploader';
import Header from 'core-components/header';

class AdminPanelAdvancedSettings extends React.Component {

    state = {
        loading: true,
        values: {

        }
    };

    render() {
        return (
            <div className="admin-panel-system-settings">
                <Header title={i18n('ADVANCED_SETTINGS')} description={i18n('ADVANCED_SETTINGS_DESCRIPTION')}/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-6">
                            <div className="admin-panel-system-settings__user-system-enabled">
                                <span className="admin-panel-system-settings__text">{i18n('USER_SYSTEM_ENABLED')}</span>
                                <ToggleButton className="admin-panel-system-settings__toggle-button" value={this.props.config['user-system-enabled']} onChange={this.onToggleButtonChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="admin-panel-system-settings__registration">
                                <span className="admin-panel-system-settings__text">{i18n('REGISTRATION')}</span>
                                <ToggleButton className="admin-panel-system-settings__toggle-button" value={this.props.config['registration']} onChange={this.onToggleButtonChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <span className="separator" />
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-3">
                            <div className="admin-panel-system-settings__text">{i18n('INCLUDE_USERS_VIA_CSV')}</div>
                            <FileUploader className="admin-panel-system-settings__button"  text="Upload"/>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-panel-system-settings__text">{i18n('INCLUDE_DATABASE_VIA_SQL')}</div>
                            <FileUploader className="admin-panel-system-settings__button"  text="Upload"/>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-panel-system-settings__text">{i18n('BACKUP_DATABASE')}</div>
                            <Button className="admin-panel-system-settings__button"  type="secondary" size="medium">Download</Button>
                        </div>
                        <div className="col-md-3">
                            <div className="admin-panel-system-settings__text">{i18n('DELETE_ALL_USERS')}</div>
                            <Button className="admin-panel-system-settings__button" size="medium">Delete</Button>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <span className="separator" />
                    </div>
                </div>
            </div>
        );
    }

    onToggleButtonChange() {
        AreYouSure.openModal(<div>{i18n('PLEASE_CONFIRM_PASSWORD')}</div>, (a) => a, 'secure');
    }

}


export default connect((store) => {
    return {
        config: store.config
    };
})(AdminPanelAdvancedSettings);
