// components
import React from 'react';
import { BakeryEditForm } from '../../forms';
import {func, string} from 'prop-types';

import css from '../EditListingDescriptionPanel/EditListingDescriptionPanel.module.css';
import {FormattedMessage} from 'react-intl';




const BakeryEditor = props =>{

  const {message,
    className,
    onSubmit,
    intl} = props;








  return (<div>
    <h1><FormattedMessage id="BakeryEditor.caption"/></h1>

    <BakeryEditForm
      onSubmit={values =>{
        console.log(values);
      }}

    classNames={css.form}
    />
  </div>);




};

BakeryEditor.defaultProps = {
  className : null,
  rootClassName : null,
  errors : null,
  onSubmit : null,
}

BakeryEditor.propTypes = {
  className: string,
  rootClassName:  string,
  onSubmit : func.isRequired

}

export default BakeryEditor;
