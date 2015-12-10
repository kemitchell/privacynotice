module.exports = {
  content: [
    // Preamble
    'This is the public privacy notice for ', { insert: 'Website URL' }, ', ' +
    'a website operated by ', { insert: 'Company Name' }, '. ' +
    'This notice describes ' +
    'what data the website collects, ' +
    'why it is collected, and ' +
    'what is done with it.',

    { heading: 'Last Updated',
      form: {
        content: [
          'This privacy notice was last updated ',
          { insert: 'Date' }, '.' ] } },

    { heading: 'Changes',
      form: {
        content: [
          'If we change this privacy policy in the future, we will post the new version at ',
          { insert: 'Privacy Notice URL' }, ' with a new "last updated" date. ' +
          'If the changes are significant, we will give more prominent notice, ' +
          'such as by sending users e-mail or showing an alert on the website. ' +
          'You can review old versions of this privacy notice at ',
          { insert: 'Privacy Notice History URL' }, '.' ] } },

    // See California Business and Professions Code 22575(b)(1).
    { condition: 'Collects Personally Identifiable Information',
      heading: 'Information the Website Collects',
      form: {
        content: [
          'The website collects the following kinds of personally identifiable information:',
          { condition: 'Names',
            form: { content: [ 'users\' names' ] } },
          { condition: 'Physical Addresses',
            form: { content: [ 'users\' physical addresses' ] } },
          { condition: 'E-Mail Addresses',
            form: { content: [ 'users\' e-mail addresses' ] } },
          { condition: 'Telephone Numbers',
            form: { content: [ 'users\' telephone numbers' ] } },
          { condition: 'Social Security Numbers',
            form: { content: [ 'users\' Social Security Numbers' ] } },
          { condition: 'Other Identifiers',
            form: { content: [ { insert: 'Other Identifiers' } ] } },
          { condition: 'Combined Information',
            form: { content: [ { insert: 'Combined Information' } ] } } ] } } ] }

if (!module.parent) {
  process.stdout.write(require('lispy-json')(module.exports) + '\n') }
