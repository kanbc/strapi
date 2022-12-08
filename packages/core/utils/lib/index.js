'use strict';

/**
 * Export shared utilities
 */
const { buildQuery, hasDeepFilters } = require('./build-query');
const parseMultipartData = require('./parse-multipart');
const parseType = require('./parse-type');
const policy = require('./policy');
const templateConfiguration = require('./template-configuration');
const { yup, handleYupError, validateYupSchema, validateYupSchemaSync } = require('./validators');
const errors = require('./errors');
const {
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  escapeQuery,
  stringIncludes,
  stringEquals,
  isKebabCase,
  isCamelCase,
  toRegressedEnumValue,
  startsWithANumber,
  joinBy,
  toKebabCase,
} = require('./string-formatting');
const { removeUndefined } = require('./object-formatting');
const { getConfigUrls, getAbsoluteAdminUrl, getAbsoluteServerUrl } = require('./config');
const { generateTimestampCode } = require('./code-generator');
const contentTypes = require('./content-types');
const webhook = require('./webhook');
const env = require('./env-helper');
const relations = require('./relations');
const setCreatorFields = require('./set-creator-fields');
const hooks = require('./hooks');
const providerFactory = require('./provider-factory');
const pagination = require('./pagination');
const sanitize = require('./sanitize');
const traverseEntity = require('./traverse-entity');
const { pipeAsync } = require('./async');
const convertQueryParams = require('./convert-query-params');
const importDefault = require('./import-default');

module.exports = {
  buildQuery,
  contentTypes,
  convertQueryParams,
  env,
  errors,
  escapeQuery,
  generateTimestampCode,
  getAbsoluteAdminUrl,
  getAbsoluteServerUrl,
  getCommonBeginning,
  getConfigUrls,
  handleYupError,
  hasDeepFilters,
  hooks,
  importDefault,
  isCamelCase,
  isKebabCase,
  joinBy,
  nameToCollectionName,
  nameToSlug,
  pagination,
  parseMultipartData,
  parseType,
  pipeAsync,
  policy,
  providerFactory,
  relations,
  removeUndefined,
  sanitize,
  setCreatorFields,
  startsWithANumber,
  stringEquals,
  stringIncludes,
  templateConfiguration,
  toKebabCase,
  toRegressedEnumValue,
  traverseEntity,
  validateYupSchema,
  validateYupSchemaSync,
  webhook,
  yup,
};
