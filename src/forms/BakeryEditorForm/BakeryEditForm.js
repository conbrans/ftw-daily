//Form

import React from 'react';
import {arrayOf, bool, func, shape, string} from 'prop-types';
import {compose} from 'redux';
import {Form as FinalForm} from 'react-final-form';
import {intlShape, injectIntl, FormattedMessage} from '../../util/reactIntl';
import classNames from 'classnames';
import {propTypes} from '../../util/types';
import {maxLength, required, composeValidators} from '../../util/validators';
import {
  Form,
  Button,
  FieldTextInput,
  FieldSelect,
  FieldCheckbox,
  FieldRadioButton
} from '../../components';


import css from './BakeryEditForm.module.css';
import * as validators from '../../util/validators';


const BakeryEditFormComponent = props => (
  <FinalForm
    {...props}
    render={formRenderProps => {
      const {
        categories,
        className,
        disabled,
        ready,
        handleSubmit,
        intl,
        invalid,
        pristine,
        updated,
        updateInProgress,
      } = formRenderProps;


      const button = intl.formatMessage({id: 'BakeryEditorForm.button'});

      const bakedGoodsMessage = intl.formatMessage({id: 'BakeryEditorForm.bakedGoodsInput'});
      const bakedGoodsRequired = intl.formatMessage({id: 'BakeryEditorForm.bakedGoodsRequired'});
      const bakedGoodsDisabledOption = intl.formatMessage({id: 'BakeryEditorForm.optionDisabled'});

      const chocolateMessage = intl.formatMessage({id: 'BakeryEditorForm.chocolateTitle'});
      const chocolateDisabledOption = intl.formatMessage({id: 'BakeryEditorForm.chocolateOptionDisabled'});

      const nutsMessage = intl.formatMessage({id: 'BakeryEditorForm.nutsTitle'});
      const nutsDisabledOption = intl.formatMessage({id: 'BakeryEditorForm.nutsOptionDisabled'});

      const fruitsDisabledOption = intl.formatMessage({id: 'BakeryEditorForm.fruitsOptionDisabled'});
      const fruits = intl.formatMessage({id: 'BakeryEditorForm.fruits'});

      const ingredientsMessage = intl.formatMessage({id: 'BakeryEditorForm.ingredientMessage'});
      const ingredientsRequired = intl.formatMessage({id: 'BakeryEditorForm.ingredientRequired'});
      const ingredientsPlaceholderMessage = intl.formatMessage({id: 'BakeryEditorForm.ingredientPlaceholder'});


      //Baked Goods options

      const bakedGoods1 = intl.formatMessage({id: 'bakedgoods.cake'});
      const bakedGoods2 = intl.formatMessage({id: 'bakedgoods.flan'});
      const bakedGoods3 = intl.formatMessage({id: 'bakedgoods.cookie'});
      const bakedGoods4 = intl.formatMessage({id: 'bakedgoods.muffin'});

      // Fruits options

      const fruits1 = intl.formatMessage({id: 'fruits.apple'});
      const fruits2 = intl.formatMessage({id: 'fruits.peach'});
      const fruits3 = intl.formatMessage({id: 'fruits.cherry'});
      const fruits4 = intl.formatMessage({id: 'fruits.strawberry'});

      //Chocolate Option

      const chocolate1 = intl.formatMessage({id: 'chocolate.bitter'});
      const chocolate2 = intl.formatMessage({id: 'chocolate.semi'});
      const chocolate3 = intl.formatMessage({id: 'chocolate.dark'});
      const chocolate4 = intl.formatMessage({id: 'chocolate.milk'});
      const chocolate5 = intl.formatMessage({id: 'chocolate.white'});

      //Nuts option

     const nuts1 = intl.formatMessage({id: 'nuts.hazel'});
      const nuts2 = intl.formatMessage({id: 'nuts.wal'});
      const nuts3 = intl.formatMessage({id: 'nuts.macadamia'});
      const nuts4 = intl.formatMessage({id: 'nuts.almonds'});

      //topping

      const topping1 = intl.formatMessage({id: "topping.yes"});
      const topping2 = intl.formatMessage({id: "topping.no"});
      const classes = classNames(css.root, className);
      const submitReady = (updated && pristine) || ready;
      const submitInProgress = updateInProgress;
      const submitDisabled = invalid || disabled || submitInProgress;


      return (
        <Form className={classes} onSubmit={handleSubmit}>
          <FieldSelect
            id="bakerygoods"
            name="bakerygoods"
            label={bakedGoodsMessage}>
            <option disabled value="">{bakedGoodsDisabledOption}</option>
            <option value="cake">{bakedGoods1}</option>
            <option value="flan">{bakedGoods2}</option>
            <option value="cookie">{bakedGoods3}</option>
            <option value="muffin">{bakedGoods4}</option>
          </FieldSelect>
          <p></p>
          <FieldTextInput
            id="ingredients"
            name="ingredients"
            className={css.ingredients}
            type="textarea"
            label={ingredientsMessage}
            placeholder={ingredientsPlaceholderMessage}
            validate={composeValidators(required(ingredientsRequired))}
          />
          <p></p>

          <FieldSelect
            id="fruits"
            name="fruits"
            label={fruits}>
            <option disabled value="">{fruitsDisabledOption}</option>
            <option value="apple">{fruits1}</option>
            <option value="peach">{fruits2}</option>
            <option value="cherry">{fruits3}</option>
            <option value="strawberry">{fruits4}</option>
          </FieldSelect>

          <p></p>
          <FieldSelect
            id="chocolate"
            name="chocolate"
            label={chocolateMessage}>
            <option disabled value="">{chocolateDisabledOption}</option>
            <option value="bitter_chocolate">{chocolate1}</option>
            <option value="semi_dark_chocolate">{chocolate2}</option>
            <option value="dark_chocolate">{chocolate3}</option>
            <option value="milk_chocolate">{chocolate4}</option>
            <option value="white_chocolate">{chocolate5}</option>
          </FieldSelect>
          <p></p>

          <FieldSelect
            id="nuts"
            name="nuts"
            label={nutsMessage}>
            <option disabled value="">{nutsDisabledOption}</option>
            <option>{nuts1}</option>
            <option>{nuts2}</option>
            <option>{nuts3}</option>
            <option>{nuts4}</option>
          </FieldSelect>
          <p></p>


          <FieldRadioButton id="topping" name="topping" label={topping1} value='1'
                            required/>
          <FieldRadioButton id="topping1" name="topping" label={topping2}
                            value='0' checked/>


          <Button
            className={css.submitButton}
            type="submit"
            inProgress={submitInProgress}
            disabled={submitDisabled}
            ready={submitReady}
          >{button}</Button>


        </Form>

      );


    }
    }
  />
);

BakeryEditFormComponent.defaultProps = {
  className: null,
  fetchErrors: null
};

BakeryEditFormComponent.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  onSubmit: func.isRequired,
  saveActionMsg: string.isRequired,
  disabled: bool.isRequired,
  ready: bool.isRequired,
  updated: bool.isRequired,
  updateInProgress: bool.isRequired,
  fetchErrors: shape({
    createListingDraftError: propTypes.error,
    showListingsError: propTypes.error,
    updateListingError: propTypes.error,
  }),
  categories: arrayOf(
    shape({
      key: string.isRequired,
      label: string.isRequired,
    })
  ),
};


export default compose(injectIntl)(BakeryEditFormComponent);
