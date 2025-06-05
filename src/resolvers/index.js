import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log('The request...',req);
  return 'Welcome to the ' + req.context.extension.project.key + ' project!';
});

export const handler = resolver.getDefinitions();
