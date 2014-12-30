exports.types = {
    "actionscript"  : [".as",".mxml"],
    "ada"           : [".ada",".adb",".ads"],
    "asm"           : [".asm",".s"],
    "asp"           : [".asp"],
    "aspx"          : [".master",".ascx",".asmx",".aspx",".svc"],
    "batch"         : [".bat",".cmd"],
    "cc"            : [".c",".h",".xs"],
    "cfmx"          : [".cfc",".cfm",".cfml"],
    "clojure"       : [".clj"],
    "cmake"         : ["CMakeLists.txt;",".cmake"],
    "coffeescript"  : [".coffee"],
    "cpp"           : [".cpp",".cc",".cxx",".m",".hpp",".hh",".h",".hxx"],
    "csharp"        : [".cs"],
    "css"           : [".css"],
    "dart"          : [".dart"],
    "delphi"        : [".pas",".int",".dfm",".nfm",".dof",".dpk",".dproj",".groupproj",".bdsgroup",".bdsproj"],
    "elisp"         : [".el"],
    "elixir"        : [".ex",".exs"],
    "erlang"        : [".erl",".hrl"],
    "fortran"       : [".f",".f77",".f90",".f95",".f03",".for",".ftn",".fpp"],
    "go"            : [".go"],
    "groovy"        : [".groovy",".gtmpl",".gpp",".grunit",".gradle"],
    "haskell"       : [".hs",".lhs"],
    "hh"            : [".h"],
    "html"          : [".htm",".html"],
    "jade"          : [".jade"],
    "java"          : [".java",".properties"],
    "js"            : [".js"],
    "json"          : [".json"],
    "jsp"           : [".jsp",".jspx",".jhtm",".jhtml"],
    "less"          : [".less"],
    "lisp"          : [".lisp",".lsp"],
    "lua"           : [".lua"],
    "make"          : [".mk;",".mak;","makefile;","Makefile;","Makefile.Debug;","Makefile.Release"],
    "matlab"        : [".m"],
    "objc"          : [".m",".h"],
    "objcpp"        : [".mm",".h"],
    "ocaml"         : [".ml",".mli"],
    "parrot"        : [".pir",".pasm",".pmc",".ops",".pod",".pg",".tg"],
    "perl"          : [".pl",".pm",".pod",".t",".psgi"],
    "perltest"      : [".t"],
    "php"           : [".php",".phpt",".php3",".php4",".php5",".phtml"],
    "plone"         : [".pt",".cpt",".metadata",".cpy",".py"],
    "python"        : [".py"],
    "rake"          : ["Rakefile"],
    "rr"            : [".R"],
    "rst"           : [".rst"],
    "ruby"          : [".rb",".rhtml",".rjs",".rxml",".erb",".rake",".spec;","Rakefile"],
    "rust"          : [".rs"],
    "sass"          : [".sass",".scss"],
    "scala"         : [".scala"],
    "scheme"        : [".scm",".ss"],
    "shell"         : [".sh",".bash",".csh",".tcsh",".ksh",".zsh",".fish"],
    "smalltalk"     : [".st"],
    "smarty"        : [".tpl"],
    "sql"           : [".sql",".ctl"],
    "stylus"        : [".styl"],
    "tcl"           : [".tcl",".itcl",".itk"],
    "tex"           : [".tex",".cls",".sty"],
    "tt"            : [".tt",".tt2",".ttml"],
    "vb"            : [".bas",".cls",".frm",".ctl",".vb",".resx"],
    "verilog"       : [".v",".vh",".sv"],
    "vhdl"          : [".vhd",".vhdl"],
    "vim"           : [".vim"],
    "xml"           : [".xml",".dtd",".xsl",".xslt",".ent"],
    "yaml"          : [".yaml",".yml"]
}
exports.help = function(){
    console.log('The following is the list of filetypes supported');
    console.log('For example:');
    console.log('\n\tnck color /path --php\n'.bold);
    console.log('\t--actionscript .as .mxml');
    console.log('\t--ada          .ada .adb .ads');
    console.log('\t--asm          .asm .s');
    console.log('\t--asp          .asp');
    console.log('\t--aspx         .master .ascx .asmx .aspx .svc');
    console.log('\t--batch        .bat .cmd');
    console.log('\t--cc           .c .h .xs');
    console.log('\t--cfmx         .cfc .cfm .cfml');
    console.log('\t--clojure      .clj');
    console.log('\t--cmake        CMakeLists.txt; .cmake');
    console.log('\t--coffeescript .coffee');
    console.log('\t--cpp          .cpp .cc .cxx .m .hpp .hh .h .hxx');
    console.log('\t--csharp       .cs');
    console.log('\t--css          .css');
    console.log('\t--dart         .dart');
    console.log('\t--delphi       .pas .int .dfm .nfm .dof .dpk .dproj .groupproj .bdsgroup .bdsproj');
    console.log('\t--elisp        .el');
    console.log('\t--elixir       .ex .exs');
    console.log('\t--erlang       .erl .hrl');
    console.log('\t--fortran      .f .f77 .f90 .f95 .f03 .for .ftn .fpp');
    console.log('\t--go           .go');
    console.log('\t--groovy       .groovy .gtmpl .gpp .grunit .gradle');
    console.log('\t--haskell      .hs .lhs');
    console.log('\t--hh           .h');
    console.log('\t--html         .htm .html');
    console.log('\t--jade         .jade');
    console.log('\t--java         .java .properties');
    console.log('\t--js           .js');
    console.log('\t--json         .json');
    console.log('\t--jsp          .jsp .jspx .jhtm .jhtml');
    console.log('\t--less         .less');
    console.log('\t--lisp         .lisp .lsp');
    console.log('\t--lua          .lua; first line matches ');
    console.log('\t--make         .mk; .mak; makefile; Makefile; Makefile.Debug; Makefile.Release');
    console.log('\t--matlab       .m');
    console.log('\t--objc         .m .h');
    console.log('\t--objcpp       .mm .h');
    console.log('\t--ocaml        .ml .mli');
    console.log('\t--parrot       .pir .pasm .pmc .ops .pod .pg .tg');
    console.log('\t--perl         .pl .pm .pod .t .psgi; first line matches ');
    console.log('\t--perltest     .t');
    console.log('\t--php          .php .phpt .php3 .php4 .php5 .phtml; first line matches ');
    console.log('\t--plone        .pt .cpt .metadata .cpy .py');
    console.log('\t--python       .py; first line matches');
    console.log('\t--rake         Rakefile');
    console.log('\t--rr           .R');
    console.log('\t--rst          .rst');
    console.log('\t--ruby         .rb .rhtml .rjs .rxml .erb .rake .spec; Rakefile; first line matches ');
    console.log('\t--rust         .rs');
    console.log('\t--sass         .sass .scss');
    console.log('\t--scala        .scala');
    console.log('\t--scheme       .scm .ss');
    console.log('\t--shell        .sh .bash .csh .tcsh .ksh .zsh .fish; first line matches');
    console.log('\t--smalltalk    .st');
    console.log('\t--smarty       .tpl');
    console.log('\t--sql          .sql .ctl');
    console.log('\t--stylus       .styl');
    console.log('\t--tcl          .tcl .itcl .itk');
    console.log('\t--tex          .tex .cls .sty');
    console.log('\t--tt           .tt .tt2 .ttml');
    console.log('\t--vb           .bas .cls .frm .ctl .vb .resx');
    console.log('\t--verilog      .v .vh .sv');
    console.log('\t--vhdl         .vhd .vhdl');
    console.log('\t--vim          .vim');
    console.log('\t--xml          .xml .dtd .xsl .xslt .ent; first line matches');
    console.log('\t--yaml         .yaml .yml');

}
