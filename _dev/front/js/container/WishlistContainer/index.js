/**
 * 2007-2020 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2020 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */
import Vue from 'vue';
import WishlistContainer from './WishlistContainer';
import initApp from '@components/init';

const props = [
  {
    name: 'url',
    type: String
  },
  {
    name: 'title',
    type: String
  },
  {
    name: 'addText',
    type: String
  },
  {
    name: 'renameText',
    type: String
  },
  {
    name: 'returnLink',
    type: String
  },
  {
    name: 'homeLink',
    type: String
  },
  {
    name: 'shareText',
    type: String
  }
];

initApp(WishlistContainer, '.wishlist-container', props);
