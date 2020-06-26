import { fetchData } from './api';
const config = require('./config');

/* Extractors */
/**
 *
 *
 * @param {*} node
 */
const defaultExtractor = node => node.textContent.trim();

/**
 *
 *
 * @param {*} node
 */
const expectedLengthExtractor = node => node.children.length - 1;

/**
 *
 *
 * @param {*} document
 * @param {*} textNode
 * @param {*} [fn=defaultExtractor]
 */
const extractElement = (document, textNode, fn = defaultExtractor) =>
  fn(document.querySelector(textNode));

/**
 *
 *
 * @param {*} _
 */
export const getData = _ =>
  fetchData(config.url, document => {
    const expected = extractElement(
      document,
      config.expectedNode,
      expectedLengthExtractor
    );
    const month = extractElement(document, config.monthNode);

    const today = parseInt(extractElement(document, config.todayNode));

    return {
      expected,
      month,
      today,
    };
  });
