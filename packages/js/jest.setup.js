// Need to disable following rules to mock text-decode/text-encoder and crypto for jsdom
// https://github.com/jsdom/jsdom/issues/1612
/* eslint-disable @silverhand/fp/no-mutation */
/* eslint-disable unicorn/prefer-module */
// TODO: crypto related to linear issue LOG-1517
const { Crypto } = require('@peculiar/webcrypto');
const fetch = require('node-fetch');
const { TextDecoder, TextEncoder } = require('text-encoder');

global.crypto = new Crypto();
global.fetch = fetch;
global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
