{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
    with pkgs;
    {
      devShells.${system}.default = mkShell {
        nativeBuildInputs = [
          dart-sass
          http-server
          nodePackages.prettier
          soupault
        ];
      };
    };
}
