# Holamundo

* Este proyecto lo cree para que los alumnos puedan confirmar sus avances contra el proyecto final de esta sección
* Decommissioned, since it would require so many effort to update it
  * The new repo is [this](https://github.com/dancer1325/angular-bases)

## How has been the project created?
* `ng new NameOfTheApplication`

## How to run?
* `npm install` / `npm install --force`

## Notes:
* Problems:
  * Problem1: Impossible to download dependencies with node -v v16.13.2 and outdated versions
    * Attempts:
      * `npm update`  doesn't work
      * `npm update SpecificPackageName` will update to the latest, but it doesn't work
      * `npm update SpecificPackageName dependencyVersion` will update to the latest, but it doesn't work
      * Updating manually just 1! unique dependency
    * Solution: Update manually to the latest all dependencies (even dev one's)
