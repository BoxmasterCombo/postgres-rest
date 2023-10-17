import { Model } from 'sequelize-typescript';
import * as fs from 'fs';
import * as path from 'path';

const modelsToExclude: string[] = ['base.model.ts'];

export const importModelsFromModulesDirectory = (): Model[] => {
  const modulesFolderPath = path.join(__dirname, '/../modules/');

  return fs
    .readdirSync(modulesFolderPath)
    .map((folderName) => {
      const folderDir = path.join(modulesFolderPath, folderName);

      console.log(folderDir, 'folderDirrr');

      return fs
        .readdirSync(folderDir)
        .filter((f) => f.endsWith('.model.ts') && !modelsToExclude.includes(f))
        .map((file) => {
          console.log(file);
          return require(path.join(folderDir, file));
        });
    })
    .flat();
};

const importedModels: Model[] = importModelsFromModulesDirectory();

console.log(importedModels, 'importedModels');

// Now importedModels array contains all the models from the modules folder
