<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="fr_FR">
<context>
    <name>ConfigPageDebug</name>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="11"/>
        <source>Remote GDB debugging</source>
        <translation>Debuggage GDB distant</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="20"/>
        <source>If enabled, a remote GDB debugger can be connected
to the port and be used for debugging.</source>
        <translation>Si activé, un débuggeur GDB distant peut être connecté\nau port et être utilisé pour débugger.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="30"/>
        <source>Enable GDB stub on Port</source>
        <translation>Activer le GDB stub sur le port</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="48"/>
        <source>Remote access to internal debugger</source>
        <translation>Accès distant au débuggeur interne</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="57"/>
        <source>Enable this to access the internal debugger via TCP (telnet/netcat),
like for firebird-send.</source>
        <translation>Activer pour accéder au débuggeur interne via TCP (telnet/netcat),\npour firebird-send par exemple.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="67"/>
        <source>Enable internal debugger on Port</source>
        <translation>Activer le débuggeur interne sur le port</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="85"/>
        <source>Enter into Debugger</source>
        <translation>Entrer dans le débuggeur</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="94"/>
        <source>Configure which situations cause the emulator to trap into the debugger.</source>
        <translation>Choisir quelles situations font que l&apos;émulateur lancera le débuggeur.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="99"/>
        <source>Enter Debugger on Startup</source>
        <translation>Lancer le débuggeur au démarrage</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageDebug.qml" line="106"/>
        <source>Enter Debugger on Warnings and Errors</source>
        <translation>Entrer dans le débuggeur lors d&apos;avertissements et d&apos;erreurs</translation>
    </message>
</context>
<context>
    <name>ConfigPageEmulation</name>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="11"/>
        <source>Startup</source>
        <translation>Démarrage</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="23"/>
        <source>When opening Firebird, the selected Kit will be started.
If available, it will resume the emulation from the provided snapshot.</source>
        <translation>A l&apos;ouverture de Firebird, le Kit choisi sera démarré.\nSi disponible, l&apos;état sera repris à partir du fichier de snapshot.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="25"/>
        <source>Select the Kit selected on startup and after restarting. If the checkbox is active, it will be launched when the App starts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="36"/>
        <source>On Startup, run Kit</source>
        <translation>Au démarrage, lancer le Kit</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="51"/>
        <source>Shutdown</source>
        <translation>Extinction</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="61"/>
        <source>On Application end, write the current state in the current snapshot.</source>
        <translation>Avant de quitter l&apos;application, sauver l&apos;état courant dans le fichier de snapshot.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageEmulation.qml" line="67"/>
        <source>Save snapshot on shutdown</source>
        <translation>Sauvegarder le snapshot à l&apos;extinction</translation>
    </message>
</context>
<context>
    <name>ConfigPageFileTransfer</name>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="12"/>
        <source>Target Directory</source>
        <translation>Répertoire cible</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="19"/>
        <source>When dragging files onto Firebird,
it will try to send the file to the emulated system.</source>
        <translation>Quand des fichiers sont glissés sur Firebird,\nun transfert vers le système émulé sera tenté.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="25"/>
        <source>Target folder for dropped files:</source>
        <translation>Répertoire cible pour les fichiers glissés :</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="41"/>
        <source>Simple File Transfer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="50"/>
        <source>If you are unable to use the main window&apos;s file transfer using either drag&apos;n&apos;drop or the file explorer, you can send single files here.</source>
        <translation>Si vous n&apos;êtes pas en mesure d&apos;utiliser la fenêtre principale pour les transferts (glisser/déposer ou via l&apos;explorateur), vous pouvez transférer des fichiers ici.</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="57"/>
        <source>Send a file</source>
        <translation>Envoyer un fichier</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="64"/>
        <source>Status:</source>
        <translation>Statut :</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="69"/>
        <source>idle</source>
        <translation>en attente</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="76"/>
        <source>Failed!</source>
        <translation>Echec !</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageFileTransfer.qml" line="78"/>
        <source> % sent</source>
        <translation> % envoyé</translation>
    </message>
</context>
<context>
    <name>ConfigPageKits</name>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="41"/>
        <source>Kit Properties</source>
        <translation>Propriétés du Kit</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="48"/>
        <source>Name:</source>
        <translation>Nom :</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="54"/>
        <source>Name</source>
        <translation>Nom</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="61"/>
        <source>Boot1:</source>
        <translation>Boot1 :</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="72"/>
        <source>Flash:</source>
        <translation>Flash :</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="86"/>
        <source>Create</source>
        <translation>Créer</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPageKits.qml" line="96"/>
        <source>Snapshot file:</source>
        <translation>Snapshot :</translation>
    </message>
</context>
<context>
    <name>ConfigPagesModel</name>
    <message>
        <location filename="../qml/ConfigPagesModel.qml" line="5"/>
        <source>Flash &amp; Boot1</source>
        <translation>Flash </translation>
    </message>
    <message>
        <location filename="../qml/ConfigPagesModel.qml" line="10"/>
        <source>Emulation</source>
        <translation>Émulation</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPagesModel.qml" line="15"/>
        <source>File Transfer</source>
        <translation>Transfert de fichiers</translation>
    </message>
    <message>
        <location filename="../qml/ConfigPagesModel.qml" line="20"/>
        <source>Debugging</source>
        <translation>Débuggage</translation>
    </message>
</context>
<context>
    <name>FBConfigDialog</name>
    <message>
        <location filename="../qml/FBConfigDialog.qml" line="10"/>
        <source>Firebird Emu Configuration</source>
        <translation>Configuration de Firebird Emu</translation>
    </message>
    <message>
        <location filename="../qml/FBConfigDialog.qml" line="48"/>
        <source>Changes are saved automatically</source>
        <translation>Les changements sont sauvés autoamtiquement</translation>
    </message>
    <message>
        <location filename="../qml/FBConfigDialog.qml" line="54"/>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
</context>
<context>
    <name>FlashDialog</name>
    <message>
        <location filename="../flashdialog.ui" line="14"/>
        <source>Create Flash Image</source>
        <translation>Créer l&apos;image Flash</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="268"/>
        <source>Calculator Type:</source>
        <translation>Type de calculatrice:</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="68"/>
        <source>Boot2:</source>
        <translation>Boot2 :</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="33"/>
        <location filename="../flashdialog.ui" line="75"/>
        <location filename="../flashdialog.ui" line="130"/>
        <location filename="../flashdialog.ui" line="222"/>
        <location filename="../flashdialog.cpp" line="50"/>
        <location filename="../flashdialog.cpp" line="64"/>
        <location filename="../flashdialog.cpp" line="82"/>
        <location filename="../flashdialog.cpp" line="116"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="99"/>
        <location filename="../flashdialog.ui" line="154"/>
        <location filename="../flashdialog.ui" line="191"/>
        <location filename="../flashdialog.ui" line="246"/>
        <source>Select file</source>
        <translation>Choisir le fichier</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="123"/>
        <source>Manuf:</source>
        <translation>Manuf :</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="215"/>
        <source>OS:</source>
        <translation>OS :</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="305"/>
        <source>HW-A</source>
        <translation>HW-A</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="310"/>
        <source>HW-J (CXCR)</source>
        <translation>HW-J (CXCR)</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="315"/>
        <source>HW-W (CXCR4)</source>
        <translation>HW-W (CXCR4)</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="26"/>
        <source>Diags:</source>
        <translation>Diags :</translation>
    </message>
    <message>
        <location filename="../flashdialog.ui" line="57"/>
        <source>Save as..</source>
        <translation>Sauvegarder sous...</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="46"/>
        <source>Select Boot2</source>
        <translation>Choisir le Boot2</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="35"/>
        <location filename="../flashdialog.cpp" line="41"/>
        <location filename="../flashdialog.cpp" line="88"/>
        <source>Unknown</source>
        <translation>Inconnu</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="60"/>
        <source>Select Manuf</source>
        <translation>Choisir le Manuf</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="70"/>
        <source>Loaded</source>
        <translation>Chargé</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="78"/>
        <source>Select OS file</source>
        <translation>Choisir le fichier d&apos;OS</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="112"/>
        <source>Select Diags</source>
        <translation>Choisir le Diags</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="138"/>
        <source>Save flash image</source>
        <translation>Sauvegarder l&apos;image Flash</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="155"/>
        <source>Flash creation failed</source>
        <translation>Erreur de création de l&apos;image flash</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="155"/>
        <source>Creating the flash file failed!</source>
        <translation>Erreur de création du fichier de l&apos;image flash !</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="165"/>
        <source>Flash saving failed</source>
        <translation>Erreur de sauvegarde de l&apos;image flash</translation>
    </message>
    <message>
        <location filename="../flashdialog.cpp" line="165"/>
        <source>Saving the flash file failed!</source>
        <translation>Erreur de sauvegarde du fichier de l&apos;image flash !</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../mainwindow.ui" line="89"/>
        <source>Pause</source>
        <translation>Pause</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="132"/>
        <source>Connect</source>
        <translation>Connecter l&apos;USB</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="225"/>
        <source>Debugger</source>
        <translation>Débuggeur</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="269"/>
        <source>File Transfer</source>
        <translation>Transferts de fichiers</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="282"/>
        <source>Filename</source>
        <translation>Nom de fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="287"/>
        <source>Size</source>
        <translation>Taille</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="vanished">Paramètres</translation>
    </message>
    <message>
        <source>Emulator</source>
        <translation type="vanished">Emulateur</translation>
    </message>
    <message>
        <source>User Interface:</source>
        <translation type="vanished">Interface utilisateur :</translation>
    </message>
    <message>
        <source>Warning</source>
        <translatorcomment>Probably shouldn&apos;t be translated ?</translatorcomment>
        <translation type="vanished">à un warning</translation>
    </message>
    <message>
        <source>Enter debugger on:</source>
        <translation type="vanished">Aller dans le débuggeur:</translation>
    </message>
    <message>
        <source>Tabs</source>
        <translation type="vanished">Onglets</translation>
    </message>
    <message>
        <source>Startup</source>
        <translation type="vanished">au démarrage</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="371"/>
        <source>Docks</source>
        <translation>&quot;Docks&quot;</translation>
    </message>
    <message>
        <source>Start emulation automatically</source>
        <translation type="vanished">Démarrer l&apos;émulation automatiquement</translation>
    </message>
    <message>
        <source>Snapshot</source>
        <translation type="vanished">Snapshot</translation>
    </message>
    <message>
        <source>Snapshot location:</source>
        <translation type="vanished">Emplacement du snapshot :</translation>
    </message>
    <message>
        <source>(none)</source>
        <translation type="vanished">(aucun)</translation>
    </message>
    <message>
        <source>Change</source>
        <translation type="vanished">Choisir</translation>
    </message>
    <message>
        <source>Suspend on close</source>
        <translation type="vanished">Pause à la fermeture</translation>
    </message>
    <message>
        <source>Resume on open</source>
        <translation type="vanished">Reprise au lancement</translation>
    </message>
    <message>
        <source>Flash:</source>
        <translation type="vanished">Flash :</translation>
    </message>
    <message>
        <source>filename</source>
        <translation type="vanished">nom du fichier</translation>
    </message>
    <message>
        <source>Boot1:</source>
        <translation type="vanished">Boot1 :</translation>
    </message>
    <message>
        <source>Boot&amp;2</source>
        <translation type="vanished">Boot&amp;2</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="472"/>
        <source>Abo&amp;ut</source>
        <translation>A propos...</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="576"/>
        <source>Send &amp;file over XModem</source>
        <translation>Envoyer un &amp;fichier par XModem</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="585"/>
        <source>&amp;Suspend</source>
        <translation>Mettre en pau&amp;se</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="594"/>
        <source>&amp;Resume</source>
        <translation>&amp;Reprendre</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="603"/>
        <source>Save &amp;to file</source>
        <translation>Enregis&amp;trer dans le fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="612"/>
        <source>Load &amp;from file</source>
        <translation>Charger depuis le &amp;fichier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="624"/>
        <source>&amp;Record GIF</source>
        <translation>Captu&amp;re GIF</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="633"/>
        <source>&amp;About Firebird</source>
        <translation>&amp;A propos de Firebird</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="638"/>
        <source>About &amp;Qt</source>
        <translation>A propos de &amp;Qt</translation>
    </message>
    <message>
        <source>Boot from:</source>
        <translation type="vanished">Booter depuis :</translation>
    </message>
    <message>
        <source>Select file</source>
        <translation type="vanished">Choisir le fichier</translation>
    </message>
    <message>
        <source>Destination directory:</source>
        <translation type="vanished">Répertoire de destination :</translation>
    </message>
    <message>
        <source>Debugging</source>
        <translation type="vanished">Débuggage</translation>
    </message>
    <message>
        <source>RDBG Port:</source>
        <translation type="vanished">Port de RDBG :</translation>
    </message>
    <message>
        <source>GDB Port:</source>
        <translation type="vanished">Port GDB :</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="328"/>
        <source>Keypad</source>
        <translation>Clavier</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="359"/>
        <source>qrc:/qml/qml/Keypad.qml</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="372"/>
        <source>Serial Monitor</source>
        <translation>Moniteur série</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="406"/>
        <source>&amp;Emulation</source>
        <translation>&amp;Emulation</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="410"/>
        <source>Restart with Kit</source>
        <translation>Redémarrer avec le Kit</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="420"/>
        <source>Boot Diags with Kit</source>
        <translation>Booter sur les Diags avec le Kit</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="441"/>
        <source>&amp;Flash</source>
        <translation>&amp;Flash</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="448"/>
        <source>&amp;Tools</source>
        <translation>&amp;Outils</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="462"/>
        <source>S&amp;napshot</source>
        <translation>S&amp;napshot</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="489"/>
        <source>&amp;Reset</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="498"/>
        <source>Enter &amp;Debugger</source>
        <translation>&amp;Entrer dans le débuggeur</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="519"/>
        <source>&amp;Pause</source>
        <translation>&amp;Pause</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="531"/>
        <location filename="../mainwindow.cpp" line="330"/>
        <source>Re&amp;start</source>
        <translation>&amp;Redémarrer</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="540"/>
        <source>&amp;Screenshot</source>
        <translation>&amp;Capture d&apos;écran</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="553"/>
        <source>Connect &amp;USB</source>
        <translation>Connecter l&apos;&amp;USB</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="562"/>
        <source>&amp;Save</source>
        <translation>&amp;Sauvegarder</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="571"/>
        <source>&amp;Create Flash</source>
        <translation>&amp;Créer la Flash</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="646"/>
        <source>&amp;External LCD</source>
        <translation>LCD &amp;Externe</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="655"/>
        <source>Configuration</source>
        <translation>Configuration</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="69"/>
        <source>Reset</source>
        <translation></translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="507"/>
        <source>&amp;Quit</source>
        <translation>&amp;Quitter</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="522"/>
        <source>Pause execution</source>
        <translation>Mettre en pause l&apos;exécution</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="159"/>
        <source>Speed: 0 %</source>
        <translation>Vitesse : 0 %</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="156"/>
        <source>Enable Fullspeed</source>
        <translation>Activer la vitesse max</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="17"/>
        <source>TI-Nspire Emulator</source>
        <translation>Emulateur TI-Nspire</translation>
    </message>
    <message>
        <location filename="../mainwindow.ui" line="112"/>
        <source>Screenshot</source>
        <translation>Capture d&apos;écran</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="465"/>
        <location filename="../mainwindow.cpp" line="467"/>
        <source>Connect USB</source>
        <translation>Connecter l&apos;USB</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="170"/>
        <source>Start the emulation via Emulation-&gt;Restart.</source>
        <translation>Démarrer l&apos;émulation via Emulation-&gt;Redémarrer.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="366"/>
        <location filename="../mainwindow.cpp" line="699"/>
        <source>Restart needed</source>
        <translation>Redémarrage requis</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="314"/>
        <source>Try to restart this app.</source>
        <translation>Essayer de redémarrer l&apos;application.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="281"/>
        <source>Download failed</source>
        <translation>Transfert échoué</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="281"/>
        <source>Could not download file.</source>
        <translation>Le fichier n&apos;a pas pu être récupéré.</translation>
    </message>
    <message>
        <source>Select boot1 file</source>
        <translation type="vanished">Choisir le boot1</translation>
    </message>
    <message>
        <source>Select flash file</source>
        <translation type="vanished">Choisir la flash</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="366"/>
        <source>You need to restart firebird to enable the tab interface.</source>
        <translation>Vous devez redémarrer firebird pour activer l&apos;interface par onglets.</translation>
    </message>
    <message>
        <source>Select snapshot location</source>
        <translation type="vanished">Choisir l&apos;emplacement du snapshot :</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="405"/>
        <source>Speed: %1 %</source>
        <translation>Vitesse : %1 %</translation>
    </message>
    <message>
        <source>Apply new flash?</source>
        <translation type="vanished">Appliquer les paramètres de flash ?</translation>
    </message>
    <message>
        <source>Do you want to work with the newly created flash image now?</source>
        <translation type="vanished">Voulez-vous utiliser ces nouveaux paramètres de Flash ?</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="412"/>
        <source>Save Screenshot</source>
        <translation>Sauvegarder la capture d&apos;écran</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="412"/>
        <source>PNG images (*.png)</source>
        <translation>Images PNG (*.png)</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="417"/>
        <source>Screenshot failed</source>
        <translation>Capture d&apos;écran échée</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="417"/>
        <source>Failed to save screenshot!</source>
        <translation>Impossible de sauvegarder la capture !</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="435"/>
        <source>GIF images (*.gif)</source>
        <translation>Images GIF (*.gif)</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="435"/>
        <source>Save Recording</source>
        <translation>Enregistrer la capture</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="445"/>
        <source>Failed recording GIF</source>
        <translation>Erreur de capture GIF</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="445"/>
        <source>A failure occured during recording</source>
        <translation>Une erreur est survenue lors de la capture</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="465"/>
        <location filename="../mainwindow.cpp" line="467"/>
        <source>Disconnect USB</source>
        <translation>Déconnecter l&apos;USB</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="489"/>
        <source>Can&apos;t resume</source>
        <translation>Impossible de reprendre</translation>
    </message>
    <message>
        <source>No snapshot path (Settings-&gt;Snapshot) given</source>
        <translation type="vanished">Pas d&apos;emplacement de snapshot donné (Paramètres-&gt;Snapshot)</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="500"/>
        <source>Can&apos;t suspend</source>
        <translation>Impossible de mettre en pause</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="505"/>
        <source>Select snapshot to resume from</source>
        <translation>Choisir l&apos;emplacement du snapshot pour la reprise</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="512"/>
        <source>Select snapshot to suspend to</source>
        <translation>Choisir l&apos;emplacement du snapshot pour la mise en pause</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="535"/>
        <source>About Firebird</source>
        <translation>A propos de Firebird</translation>
    </message>
    <message>
        <source>&lt;h3&gt;Firebird %1&lt;/h3&gt;&lt;a href=&apos;https://github.com/nspire-emus/firebird&apos;&gt;On GitHub&lt;/a&gt;&lt;br&gt;&lt;br&gt;Authors:&lt;br&gt;Fabian Vogt (&lt;a href=&apos;https://github.com/Vogtinator&apos;&gt;Vogtinator&lt;/a&gt;)&lt;br&gt;Adrien Bertrand (&lt;a href=&apos;https://github.com/adriweb&apos;&gt;Adriweb&lt;/a&gt;)&lt;br&gt;Antonio Vasquez (&lt;a href=&apos;https://github.com/antoniovazquezblanco&apos;&gt;antoniovazquezblanco&lt;/a&gt;)&lt;br&gt;Lionel Debroux (&lt;a href=&apos;https://github.com/debrouxl&apos;&gt;debrouxl&lt;/a&gt;)&lt;br&gt;Based on nspire_emu v0.70 by Goplat&lt;br&gt;&lt;br&gt;This work is licensed under the GPLv3.&lt;br&gt;To view a copy of this license, visit &lt;a href=&apos;https://www.gnu.org/licenses/gpl-3.0.html&apos;&gt;https://www.gnu.org/licenses/gpl-3.0.html&lt;/a&gt;</source>
        <translation type="vanished">&lt;h3&gt;Firebird %1&lt;/h3&gt;&lt;a href=&apos;https://github.com/nspire-emus/firebird&apos;&gt;Sur GitHub&lt;/a&gt;&lt;br&gt;&lt;br&gt;Auteurs:&lt;br&gt;Fabian Vogt (&lt;a href=&apos;https://github.com/Vogtinator&apos;&gt;Vogtinator&lt;/a&gt;)&lt;br&gt;Adrien Bertrand (&lt;a href=&apos;https://github.com/adriweb&apos;&gt;Adriweb&lt;/a&gt;)&lt;br&gt;Antonio Vasquez (&lt;a href=&apos;https://github.com/antoniovazquezblanco&apos;&gt;antoniovazquezblanco&lt;/a&gt;)&lt;br&gt;Lionel Debroux (&lt;a href=&apos;https://github.com/debrouxl&apos;&gt;debrouxl&lt;/a&gt;)&lt;br&gt;Basé sur nspire_emu v0.70 par Goplat&lt;br&gt;&lt;br&gt;Projet sous licence GPLv3.&lt;br&gt;Pour voir une opie de cette licence, visitez &lt;a href=&apos;https://www.gnu.org/licenses/gpl-3.0.html&apos;&gt;https://www.gnu.org/licenses/gpl-3.0.html&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="568"/>
        <source>Emulation started</source>
        <translation>Emulation démarrée</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="570"/>
        <source>Could not start the emulation</source>
        <translation>Impossible de démarrer l&apos;émulation</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="570"/>
        <source>Starting the emulation failed.
Are the paths to boot1 and flash correct?</source>
        <translation>Le démarrage de l&apos;émulation a échoué. Les emplacements des boot1 et flash sont-ils corrects ?</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="578"/>
        <source>Emulation resumed from snapshot</source>
        <translation>Emulation reprise depuis le snapshot</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="314"/>
        <location filename="../mainwindow.cpp" line="580"/>
        <source>Could not resume</source>
        <translation>Impossible de reprendre</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="330"/>
        <source>&amp;Start</source>
        <translation>Démarrer</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="489"/>
        <location filename="../mainwindow.cpp" line="500"/>
        <source>The current kit does not have a snapshot file configured</source>
        <translation>Le Kit courant n&apos;a pas de fichier snapshot configuré</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="536"/>
        <source>&lt;h3&gt;Firebird %1&lt;/h3&gt;&lt;a href=&apos;https://github.com/nspire-emus/firebird&apos;&gt;On GitHub&lt;/a&gt;&lt;br&gt;&lt;br&gt;Authors:&lt;br&gt;Fabian Vogt (&lt;a href=&apos;https://github.com/Vogtinator&apos;&gt;Vogtinator&lt;/a&gt;)&lt;br&gt;Adrien Bertrand (&lt;a href=&apos;https://github.com/adriweb&apos;&gt;Adriweb&lt;/a&gt;)&lt;br&gt;Antonio Vasquez (&lt;a href=&apos;https://github.com/antoniovazquezblanco&apos;&gt;antoniovazquezblanco&lt;/a&gt;)&lt;br&gt;Lionel Debroux (&lt;a href=&apos;https://github.com/debrouxl&apos;&gt;debrouxl&lt;/a&gt;)&lt;br&gt;Denis Avashurov (&lt;a href=&apos;https://github.com/denisps&apos;&gt;denisps&lt;/a&gt;)&lt;br&gt;Based on nspire_emu v0.70 by Goplat&lt;br&gt;&lt;br&gt;This work is licensed under the GPLv3.&lt;br&gt;To view a copy of this license, visit &lt;a href=&apos;https://www.gnu.org/licenses/gpl-3.0.html&apos;&gt;https://www.gnu.org/licenses/gpl-3.0.html&lt;/a&gt;</source>
        <translation>&lt;h3&gt;Firebird %1&lt;/h3&gt;&lt;a href=&apos;https://github.com/nspire-emus/firebird&apos;&gt;Sur GitHub&lt;/a&gt;&lt;br&gt;&lt;br&gt;Auteurs:&lt;br&gt;Fabian Vogt (&lt;a href=&apos;https://github.com/Vogtinator&apos;&gt;Vogtinator&lt;/a&gt;)&lt;br&gt;Adrien Bertrand (&lt;a href=&apos;https://github.com/adriweb&apos;&gt;Adriweb&lt;/a&gt;)&lt;br&gt;Antonio Vasquez (&lt;a href=&apos;https://github.com/antoniovazquezblanco&apos;&gt;antoniovazquezblanco&lt;/a&gt;)&lt;br&gt;Lionel Debroux (&lt;a href=&apos;https://github.com/debrouxl&apos;&gt;debrouxl&lt;/a&gt;)&lt;br&gt;Denis Avashurov (&lt;a href=&apos;https://github.com/denisps&apos;&gt;denisps&lt;/a&gt;)&lt;br&gt;Basé sur nspire_emu v0.70 par Goplat&lt;br&gt;&lt;br&gt;Projet sous licence GPLv3.&lt;br&gt;Pour voir une opie de cette licence, visitez &lt;a href=&apos;https://www.gnu.org/licenses/gpl-3.0.html&apos;&gt;https://www.gnu.org/licenses/gpl-3.0.html&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="580"/>
        <source>Resuming failed.
Try to fix the issue and try again.</source>
        <translation>La reprise a échouée. Essayez de corriger le problème, puis retentez.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="586"/>
        <source>Snapshot saved</source>
        <translation>Snapshot sauvegardé</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="588"/>
        <source>Could not suspend</source>
        <translation>Impossible de mettre en pause</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="588"/>
        <source>Suspending failed.
Try to fix the issue and try again.</source>
        <translation>Mise en pause échouée. Essayez de corriger le problème, puis retentez.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="602"/>
        <source>Emulation stopped</source>
        <translation>Emulation arrêtée</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="683"/>
        <source>No boot1 set</source>
        <translation>Pas de Boot1 choisi</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="683"/>
        <source>Before you can start the emulation, you have to select a proper boot1 file.</source>
        <translation>Avant de pouvoir démarrer l&apos;émulation, vous devez choisir un fichier Boot1 valide.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="689"/>
        <source>No flash image loaded</source>
        <translation>Pas d&apos;image Flash chargée</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="689"/>
        <source>Before you can start the emulation, you have to load a proper flash file.
You can create one via Flash-&gt;Create Flash in the menu.</source>
        <translation>Avant de pouvoir démarrer l&apos;émulation, vous devez choisir un fichier d&apos;image Flash valide. Vous pouvez en créer un via le menu Flash-&gt;Créer la Flash.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="699"/>
        <source>Failed to restart emulator. Close and reopen this app.
</source>
        <translation>Impossible de redémarrer l&apos;émulateur. Veuillez fermer puis réouvrir l&apos;application.</translation>
    </message>
    <message>
        <location filename="../mainwindow.cpp" line="709"/>
        <source>Select file to send</source>
        <translation>Choisir le fichier à envoyer</translation>
    </message>
</context>
<context>
    <name>MobileControl2</name>
    <message>
        <source>Settings</source>
        <translation type="vanished">Paramètres</translation>
    </message>
    <message>
        <source>Select Boot1</source>
        <translation type="vanished">Choisir le Boot1</translation>
    </message>
    <message>
        <source>Select Snapshot Location</source>
        <translation type="vanished">Choisir l&apos;emplacement du snapshot</translation>
    </message>
    <message>
        <source>Boot1:</source>
        <translation type="vanished">Boot1 :</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="vanished">Aucun</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="vanished">Choisir</translation>
    </message>
    <message>
        <source>Flash:</source>
        <translation type="vanished">Flash :</translation>
    </message>
    <message>
        <source>Snapshot
location:</source>
        <translation type="vanished">Emplacement du snapshot :</translation>
    </message>
</context>
<context>
    <name>MobileUI</name>
    <message>
        <location filename="../qml/MobileUI.qml" line="56"/>
        <source>Start</source>
        <translation>Démarrer</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="68"/>
        <source>Reset</source>
        <translation>Reset</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="77"/>
        <source>Resume</source>
        <translation>Reprendre</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="89"/>
        <source>Save</source>
        <translation>Sauver</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="94"/>
        <source>Error</source>
        <translation>Erreur</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="95"/>
        <source>Failed to save changes!</source>
        <translation>Impossible de sauvegarder les modifications !</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="101"/>
        <source>Warning</source>
        <translation>Attention</translation>
    </message>
    <message>
        <location filename="../qml/MobileUI.qml" line="102"/>
        <source>Flash saved, but no snapshot location configured.
You won&apos;t be able to resume.</source>
        <translation>Flash sauvée, mais aucun emplacement de snapshot configuré. Vous ne pourrez pas reprendre.</translation>
    </message>
</context>
<context>
    <name>PageDelegate</name>
    <message>
        <location filename="../qml/Firebird/UIComponents/PageDelegate.qml" line="41"/>
        <source>Text</source>
        <translation>Texte</translation>
    </message>
</context>
<context>
    <name>QMLBridge</name>
    <message>
        <location filename="../qmlbridge.cpp" line="329"/>
        <source>Could not stop emulation</source>
        <translation>Impossible d&apos;arrêter l&apos;émulation</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="334"/>
        <source>Starting emulation</source>
        <translation>Démarrage de l&apos;émulation</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="vanished">Erreur</translation>
    </message>
    <message>
        <source>You need to select a proper boot1 and flash image before.
Swipe the keypad to the left to show the settings menu.</source>
        <translation type="vanished">Vous avez besoin de choisir un boot1 et une images flash avant.
Faites glisser le clavier versl a gauche pour afficher les paramètres.</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="355"/>
        <source>Suspending emulation</source>
        <translation>Mise en pause de l&apos;émulation</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="362"/>
        <source>Resuming emulation</source>
        <translation>Reprise de l&apos;émulation</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="268"/>
        <source>None</source>
        <translation>Aucun</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="36"/>
        <source>Default</source>
        <translation>Par défaut</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="338"/>
        <source>No boot1 or flash selected.
Swipe keypad left for configuration.</source>
        <translation>Pas de boot1 ou flash choisie.\nSwipez le clavier à gauche pour ajuster la configuration.</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="425"/>
        <source>Emulation started</source>
        <translation>Emulation démarrée</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="427"/>
        <source>Couldn&apos;t start emulation</source>
        <translation>Impossible de démarrer l&apos;émulation</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="433"/>
        <source>Emulation resumed</source>
        <translation>Emulation reprise</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="435"/>
        <source>Could not resume</source>
        <translation>Impossible de reprendre</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="441"/>
        <source>Flash and snapshot saved</source>
        <translation>Flash et snapshot sauvegardés</translation>
    </message>
    <message>
        <location filename="../qmlbridge.cpp" line="443"/>
        <source>Couldn&apos;t save snapshot</source>
        <translation>Impossible de sauvegarder le snapshot</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../qtframebuffer.cpp" line="60"/>
        <source>LCD turned off</source>
        <translation>Ecran éteint</translation>
    </message>
    <message>
        <location filename="../qtframebuffer.cpp" line="73"/>
        <source>In debugger</source>
        <translation>En débuggage</translation>
    </message>
</context>
<context>
    <name>USBLinkTreeWidget</name>
    <message>
        <location filename="../usblinktreewidget.cpp" line="81"/>
        <source>Delete</source>
        <translation>Supprimer</translation>
    </message>
    <message>
        <location filename="../usblinktreewidget.cpp" line="90"/>
        <source>New folder</source>
        <translation>Nouveau dossier</translation>
    </message>
    <message>
        <location filename="../usblinktreewidget.cpp" line="108"/>
        <source>Download</source>
        <translation>Récupérer</translation>
    </message>
    <message>
        <location filename="../usblinktreewidget.cpp" line="128"/>
        <source>Too much</source>
        <translation>Trop</translation>
    </message>
    <message>
        <location filename="../usblinktreewidget.cpp" line="289"/>
        <source>Chose save location</source>
        <translation>Choisir l&apos;emplacement du fichier à récupérer</translation>
    </message>
    <message>
        <location filename="../usblinktreewidget.cpp" line="289"/>
        <source>TNS file (*.tns)</source>
        <translation>Fichier TNS (*.tns)</translation>
    </message>
</context>
</TS>
