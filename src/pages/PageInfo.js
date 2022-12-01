import React, { useState } from 'react';

const Article = ({ title, ingress, additionalText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={'article'}>
      <h3>{title}</h3>
      <p>{ingress}</p>

      {expanded && (
        <p>{additionalText}</p>)
      }
      <span className={'show-more-btn'} onClick={() => setExpanded(!expanded)}>{expanded ? "Show less..." : "Show more..."}</span>
    </div>
  );
};

const Page = () => {
  return (
    <main className={'main-content'}>
      <h2>
        Welcome to informative page
      </h2>
      <Article
        title={'Cool article about boring stuff!'}
        ingress={'Sed ultricies commodo dolor vitae sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'}
        additionalText={'Integer non accumsan sem. Etiam laoreet a orci vulputate mattis. Duis nec elementum metus. Nam pulvinar id est auctor congue. Ut nulla ligula, euismod ut orci vitae, sagittis tempus est. Duis mollis nulla lectus, a bibendum est facilisis in. In non commodo purus, et tristique diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus malesuada dolor nec tortor euismod, gravida elementum enim pulvinar. Cras eu nulla eu nunc facilisis eleifend quis et risus. Proin vel varius elit. Aliquam sed interdum enim, id aliquam risus. Suspendisse potenti.'}
      />
      <Article
        title={'Boring article about cool stuff 🤷'}
        ingress={'Sed ultricies commodo dolor vitae sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'}
        additionalText={'Integer non accumsan sem. Etiam laoreet a orci vulputate mattis. Duis nec elementum metus. Nam pulvinar id est auctor congue. Ut nulla ligula, euismod ut orci vitae, sagittis tempus est. Duis mollis nulla lectus, a bibendum est facilisis in. In non commodo purus, et tristique diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus malesuada dolor nec tortor euismod, gravida elementum enim pulvinar. Cras eu nulla eu nunc facilisis eleifend quis et risus. Proin vel varius elit. Aliquam sed interdum enim, id aliquam risus. Suspendisse potenti.'}
      />
      <Article
        title={'The last article you ever need to read'}
        ingress={'Sed ultricies commodo dolor vitae sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'}
        additionalText={'Integer non accumsan sem. Etiam laoreet a orci vulputate mattis. Duis nec elementum metus. Nam pulvinar id est auctor congue. Ut nulla ligula, euismod ut orci vitae, sagittis tempus est. Duis mollis nulla lectus, a bibendum est facilisis in. In non commodo purus, et tristique diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus malesuada dolor nec tortor euismod, gravida elementum enim pulvinar. Cras eu nulla eu nunc facilisis eleifend quis et risus. Proin vel varius elit. Aliquam sed interdum enim, id aliquam risus. Suspendisse potenti.'}
      />
    </main>
  );
};

export default Page;