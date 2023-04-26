import React from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import Box from '../../../ui/box/box';
import Popover from '../../../ui/popover';
import Button from '../../../ui/button';
import {
  AvatarIcon,
  BUTTON_TYPES,
  ButtonLink,
  IconName,
  IconSize,
  Text,
} from '../../../component-library';
import {
  AlignItems,
  BackgroundColor,
  DISPLAY,
  IconColor,
  JustifyContent,
  TextVariant,
} from '../../../../helpers/constants/design-system';

export default function SnapPrivacyWarning({ onOk }) {
  const t = useI18nContext();

  return (
    <Popover className="snap-privacy-warning">
      <Box padding={4}>
        <Box
          className="snap-privacy-warning__info-icon"
          display={DISPLAY.FLEX}
          justifyContent={JustifyContent.center}
          alignItems={AlignItems.center}
        >
          <AvatarIcon
            iconName={IconName.Info}
            color={IconColor.infoDefault}
            backgroundColor={BackgroundColor.primaryMuted}
            size={IconSize.Md}
          />
        </Box>
        <Box
          className="snap-privacy-warning__title"
          marginTop={4}
          marginBottom={6}
          display={DISPLAY.FLEX}
          justifyContent={JustifyContent.center}
          alignItems={AlignItems.center}
        >
          <Text variant={TextVariant.headingMd}>{t('thirdPartySoftware')}</Text>
        </Box>
        <Box className="snap-privacy-warning__message">
          <Text variant={TextVariant.bodyMd}>
            {t('snapsPrivacyWarningFirstMessage')}
          </Text>
          <Text variant={TextVariant.bodyMd} paddingTop={6}>
            {t('snapsPrivacyWarningSecondMessage')}
          </Text>
          <Text
            variant={TextVariant.bodyMd}
            className="snap-privacy-warning__more-details"
          >
            {t('click')}
            <ButtonLink
              className="snap-privacy-warning__more-details__link"
              type={BUTTON_TYPES.LINK}
              href="https://metamask.io/faqs/"
              target="_blank"
              padding={0}
            >
              &nbsp;{t('here')}&nbsp;
            </ButtonLink>
            {t('forMoreDetails')}
          </Text>
        </Box>
        <Box className="snap-privacy-warning__ok-button" marginTop={6}>
          <Button
            className="snap-privacy-warning__button"
            type={BUTTON_TYPES.PRIMARY}
            onClick={onOk}
          >
            {t('ok').toUpperCase()}
          </Button>
        </Box>
      </Box>
    </Popover>
  );
}

SnapPrivacyWarning.propTypes = {
  /**
   * onOk handler
   */
  onOk: PropTypes.func,
};
