# News Portal
*   The page consists of various news sections and each section is identified by its title.
Each section also has a hero image defining the section.
The Beauty, Books, Home and Garden and Parenting sections has a gallery indicator to note that the hero image is part of a gallery.
  *   Different news items are then listed as part of the sections.
  *   New articles which are gallery items and ads are indicated separately to be so.
  *   Each Section should have exact 4 articles displayed.
  *   You can fetch the data for input for the elements from apis.
  *   First api returns the various sections - Eg: [{sectionId:<someId>, sectionName: "Fashion", sectionUrl: <someurl>}, {...}, ...]
Second api can be used to retrieve the details of each section. Eg: {sectionId: <someId>, articleList: [{articleId: <someId>, articleTitle: <Sometitle>, adInfo: {Adpartner: <somePartner>}}, {...}, ...]}
  *   Please use static data as return for the apis.
