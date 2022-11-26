import { Tree, joinPathFragments,getProjects, readProjectConfiguration, names, generateFiles, formatFiles } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: names(schema.name).fileName });
  const libRoot = readProjectConfiguration(
    tree,
    names(schema.name).fileName
  ).root;

  const projectMap = getProjects(tree);
  
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    libRoot,
    { conferenceName :  names(schema.name).className },
  );
  console.log('I am root');
  console.log(projectMap[0]);
  await formatFiles(tree);
}
