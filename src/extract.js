import { fetchData } from './api';
const config = require('./config');

/* Extractors */
const defaultExtractor = node => node.textContent.trim();
const expectedLengthExtractor = node => node.children.length - 1;

const extractElement = (document, textNode, fn = defaultExtractor) =>
  fn(document.querySelector(textNode));

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
