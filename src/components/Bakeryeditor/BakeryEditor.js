// components
import React from 'react';

import { BakeryEditForm } from '../../forms';
import {func, string} from 'prop-types';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

import css from '../EditListingDescriptionPanel/EditListingDescriptionPanel.module.css';
import {FormattedMessage} from 'react-intl';
import * as ReactPDF from 'react-dom';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});






const BakeryEditor = props =>{

  const {message,
    className,
    onSubmit,
    intl} = props;


  return (<div>
    <h1><FormattedMessage id="BakeryEditor.caption"/></h1>

    <BakeryEditForm
      onSubmit={values => {
        alert("Ihre Idee wurde gespeichert.");
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
