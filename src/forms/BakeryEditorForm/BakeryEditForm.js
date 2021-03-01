import React from 'react';
import { arrayOf, bool, func, shape, string } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { propTypes } from '../../util/types';
import { maxLength, required, composeValidators } from '../../util/validators';
import { Form, Button, FieldTextInput } from '../../components';
import CustomCategorySelectFieldMaybe from '../EditListingDescriptionForm/CustomCategorySelectFieldMaybe';

import css from './BakeryEditForm.module.css';


const BakeryEditFormComponent = props =>(
  <FinalForm
    {...props}
    render={formRenderProps =>{
      const {
        categories,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        saveActionMsg,
        updated,
        updateInProgress,
        fetchErrors,
      } =formRenderProps;


      const titleMessage = intl.formatMessage({ id: 'BakeryEditor.caption'});
      const ingredientsMessage = intl.formatMessage({id : 'BakeryEditor.ingredientMessage'});
      const ingredientsRequired = intl.formatMessage({id : 'BakeryEditorForm.ingredientRequired'});
      const ingredientsPlaceholderMessage = intl.formatMessage({id : 'BakeryEditorForm.ingredientPlaceholder'})
      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;




      return (
        <Form className={classes} onSubmit={handleSubmit}>


          <CustomCategorySelectFieldMaybe
            id="category"
            name="category"
            categories={categories}
            intl={intl}
            autoFocus
          />

          <FieldTextInput
            id="ingredients"
            name="ingredients"
            className={css.ingredients}
            type="textarea"
            label={ingredientsMessage}
            placeholder={ingredientsPlaceholderMessage}
            validate={composeValidators(required(ingredientsRequired))}
          />



          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >
            {saveActionMsg}
          </Button>


        </Form>

      )



    }
    }
  />
)

BakeryEditFormComponent.defaultProps = { className: null, fetchErrors:null};

BakeryEditFormComponent.propTypes = {
  className: string,
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
}
