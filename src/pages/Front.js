import React from 'react';

const Front = () => {
  return (
    <main className={'main-content'}>
      <h3>Welcome to a11y workshop</h3>
      
      <p>Some things we're going through today:</p>
      <p>
        - Basics<br />
        - Tooling<br />
        - Images<br />
        - Headings<br />
        - Basic forms<br />
        - Contrasts, text<br />
        - WAI-ARIA
      </p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in leo tellus. Quisque enim nisi, placerat at
        nisi ut, varius euismod lectus. Cras quis erat et nibh bibendum pharetra in eu magna. Maecenas pulvinar
        malesuada quam, ut iaculis metus molestie eget. Nullam vel lorem non magna congue interdum ut eu diam. Cras
        dapibus massa non consectetur sodales. Duis egestas rhoncus eleifend.</p>
      
      <img src={'https://picsum.photos/700/300?random=1'} />
      <span className={'img-caption'}>This image is really cool.</span>

      <h5>The next section is super interesting for you.</h5>

      <p>Fusce suscipit lacus turpis, ut posuere elit tempor sit amet. Phasellus cursus porttitor scelerisque. Fusce
        pharetra dui a porttitor ultrices. Curabitur ac sapien ante. Quisque varius nec lectus quis ultricies. Donec
        nulla odio, mollis scelerisque nisi sit amet, suscipit ultricies magna. Proin eget ligula a lectus scelerisque
        rutrum. Pellentesque at turpis id mauris elementum luctus dapibus a lectus. Pellentesque sagittis efficitur nisi
        eu hendrerit. In ornare dapibus ipsum, sed scelerisque erat ornare id. Aenean ut lorem imperdiet, vehicula sem
        id, posuere sapien.</p>

      <img src={'https://picsum.photos/700/300?random=2'} />
      <span className={'img-caption'}>This one too though it's random.</span>

      <p>Nullam tincidunt sodales felis sed sagittis. Fusce egestas justo ut sem sollicitudin pulvinar. Nam semper mi
        sem, eget auctor orci ultrices a. Pellentesque commodo vehicula ex in sagittis. Integer eu sodales justo. Nam
        interdum rhoncus ligula nec fermentum. Phasellus consectetur enim eu justo tincidunt lacinia. Vestibulum
        efficitur faucibus nibh, at fringilla ligula efficitur a. Praesent sollicitudin suscipit risus nec tincidunt.
        Nullam vestibulum consequat nibh, vel sagittis diam euismod sed. Quisque ullamcorper nulla sit amet mauris
        rhoncus viverra. Morbi pellentesque urna nec metus varius luctus. Quisque vel aliquet sapien, a iaculis est.
        Donec luctus erat et tempus accumsan.</p>
    </main>
  );
};

export default Front;
