import { ErrorInfo } from "@/types";
import aws_accessdenied from "./errors/aws/accessdenied";
import aws_accessdeniedexception from "./errors/aws/accessdeniedexception";
import aws_bucketalreadyexists from "./errors/aws/bucketalreadyexists";
import aws_bucketalreadyownedbyyou from "./errors/aws/bucketalreadyownedbyyou";
import aws_expiredtoken from "./errors/aws/expiredtoken";
import aws_invalidclienttokenid from "./errors/aws/invalidclienttokenid";
import aws_nocredentialproviders from "./errors/aws/nocredentialproviders";
import aws_requestlimitexceeded from "./errors/aws/requestlimitexceeded";
import aws_resourcenotfoundexception from "./errors/aws/resourcenotfoundexception";
import aws_throttlingexception from "./errors/aws/throttlingexception";
import aws_unabletolocatecredentials from "./errors/aws/unable-to-locate-credentials";
import aws_validationexception from "./errors/aws/validationexception";
import docker_cannotconnecttothedockerdaemon from "./errors/docker/cannot-connect-to-the-docker-daemon";
import docker_containerexitedwithcode137 from "./errors/docker/container-exited-with-code-137";
import docker_dockerdaemonisnotrunning from "./errors/docker/docker-daemon-is-not-running";
import docker_dockerfileparseerror from "./errors/docker/dockerfile-parse-error";
import docker_dockersocketpermissiondenied from "./errors/docker/docker-socket-permission-denied";
import docker_exitcode125 from "./errors/docker/exit-code-125";
import docker_exitcode126 from "./errors/docker/exit-code-126";
import docker_exitcode127 from "./errors/docker/exit-code-127";
import docker_exitcode137 from "./errors/docker/exit-code-137";
import docker_failedtosolve from "./errors/docker/failed-to-solve";
import docker_imagenotfound from "./errors/docker/image-not-found";
import docker_manifestunknown from "./errors/docker/manifest-unknown";
import docker_networknotfound from "./errors/docker/network-not-found";
import docker_nospaceleftondevice from "./errors/docker/no-space-left-on-device";
import docker_ociruntimecreatefailed from "./errors/docker/oci-runtime-create-failed";
import docker_oomkilled from "./errors/docker/oomkilled";
import docker_permissiondenied from "./errors/docker/permission-denied";
import docker_portisalreadyallocated from "./errors/docker/port-is-already-allocated";
import docker_pullaccessdenied from "./errors/docker/pull-access-denied";
import docker_volumenotfound from "./errors/docker/volume-not-found";
import git_anothergitprocessseemstoberunning from "./errors/git/another-git-process-seems-to-be-running";
import git_authenticationfailed from "./errors/git/authentication-failed";
import git_authoridentityunknown from "./errors/git/author-identity-unknown";
import git_automaticmergefailed from "./errors/git/automatic-merge-failed";
import git_failedtopushsomerefs from "./errors/git/failed-to-push-some-refs";
import git_fatalnotagitrepository from "./errors/git/fatal-not-a-git-repository";
import git_headdetached from "./errors/git/head-detached";
import git_mergeconflict from "./errors/git/merge-conflict";
import git_nonfastforward from "./errors/git/non-fast-forward";
import git_pathspecdidnotmatchanyfiles from "./errors/git/pathspec-did-not-match-any-files";
import git_permissiondeniedpublickey from "./errors/git/permission-denied-publickey";
import git_remoteoriginalreadyexists from "./errors/git/remote-origin-already-exists";
import git_repositorynotfound from "./errors/git/repository-not-found";
import git_srcrefspecdoesnotmatchany from "./errors/git/src-refspec-does-not-match-any";
import git_yourlocalchangeswouldbeoverwritten from "./errors/git/your-local-changes-would-be-overwritten";
import httpstatus_100continue from "./errors/http-status/100-continue";
import httpstatus_101switchingprotocols from "./errors/http-status/101-switching-protocols";
import httpstatus_102processing from "./errors/http-status/102-processing";
import httpstatus_103earlyhints from "./errors/http-status/103-early-hints";
import httpstatus_200ok from "./errors/http-status/200-ok";
import httpstatus_201created from "./errors/http-status/201-created";
import httpstatus_202accepted from "./errors/http-status/202-accepted";
import httpstatus_203nonauthoritativeinformation from "./errors/http-status/203-non-authoritative-information";
import httpstatus_204nocontent from "./errors/http-status/204-no-content";
import httpstatus_205resetcontent from "./errors/http-status/205-reset-content";
import httpstatus_206partialcontent from "./errors/http-status/206-partial-content";
import httpstatus_207multistatus from "./errors/http-status/207-multi-status";
import httpstatus_208alreadyreported from "./errors/http-status/208-already-reported";
import httpstatus_226imused from "./errors/http-status/226-im-used";
import httpstatus_300multiplechoices from "./errors/http-status/300-multiple-choices";
import httpstatus_301movedpermanently from "./errors/http-status/301-moved-permanently";
import httpstatus_302found from "./errors/http-status/302-found";
import httpstatus_303seeother from "./errors/http-status/303-see-other";
import httpstatus_304notmodified from "./errors/http-status/304-not-modified";
import httpstatus_305useproxy from "./errors/http-status/305-use-proxy";
import httpstatus_306switchproxy from "./errors/http-status/306-switch-proxy";
import httpstatus_307temporaryredirect from "./errors/http-status/307-temporary-redirect";
import httpstatus_308permanentredirect from "./errors/http-status/308-permanent-redirect";
import httpstatus_400badrequest from "./errors/http-status/400-bad-request";
import httpstatus_401unauthorized from "./errors/http-status/401-unauthorized";
import httpstatus_402paymentrequired from "./errors/http-status/402-payment-required";
import httpstatus_403forbidden from "./errors/http-status/403-forbidden";
import httpstatus_404notfound from "./errors/http-status/404-not-found";
import httpstatus_405methodnotallowed from "./errors/http-status/405-method-not-allowed";
import httpstatus_406notacceptable from "./errors/http-status/406-not-acceptable";
import httpstatus_407proxyauthenticationrequired from "./errors/http-status/407-proxy-authentication-required";
import httpstatus_408requesttimeout from "./errors/http-status/408-request-timeout";
import httpstatus_409conflict from "./errors/http-status/409-conflict";
import httpstatus_410gone from "./errors/http-status/410-gone";
import httpstatus_411lengthrequired from "./errors/http-status/411-length-required";
import httpstatus_412preconditionfailed from "./errors/http-status/412-precondition-failed";
import httpstatus_413contenttoolarge from "./errors/http-status/413-content-too-large";
import httpstatus_414uritoolong from "./errors/http-status/414-uri-too-long";
import httpstatus_415unsupportedmediatype from "./errors/http-status/415-unsupported-media-type";
import httpstatus_416rangenotsatisfiable from "./errors/http-status/416-range-not-satisfiable";
import httpstatus_417expectationfailed from "./errors/http-status/417-expectation-failed";
import httpstatus_418imateapot from "./errors/http-status/418-im-a-teapot";
import httpstatus_421misdirectedrequest from "./errors/http-status/421-misdirected-request";
import httpstatus_422unprocessablecontent from "./errors/http-status/422-unprocessable-content";
import httpstatus_423locked from "./errors/http-status/423-locked";
import httpstatus_424faileddependency from "./errors/http-status/424-failed-dependency";
import httpstatus_425tooearly from "./errors/http-status/425-too-early";
import httpstatus_426upgraderequired from "./errors/http-status/426-upgrade-required";
import httpstatus_428preconditionrequired from "./errors/http-status/428-precondition-required";
import httpstatus_429toomanyrequests from "./errors/http-status/429-too-many-requests";
import httpstatus_431requestheaderfieldstoolarge from "./errors/http-status/431-request-header-fields-too-large";
import httpstatus_451unavailableforlegalreasons from "./errors/http-status/451-unavailable-for-legal-reasons";
import httpstatus_500internalservererror from "./errors/http-status/500-internal-server-error";
import httpstatus_501notimplemented from "./errors/http-status/501-not-implemented";
import httpstatus_502badgateway from "./errors/http-status/502-bad-gateway";
import httpstatus_503serviceunavailable from "./errors/http-status/503-service-unavailable";
import httpstatus_504gatewaytimeout from "./errors/http-status/504-gateway-timeout";
import httpstatus_505httpversionnotsupported from "./errors/http-status/505-http-version-not-supported";
import httpstatus_506variantalsonegotiates from "./errors/http-status/506-variant-also-negotiates";
import httpstatus_507insufficientstorage from "./errors/http-status/507-insufficient-storage";
import httpstatus_508loopdetected from "./errors/http-status/508-loop-detected";
import httpstatus_510notextended from "./errors/http-status/510-not-extended";
import httpstatus_511networkauthenticationrequired from "./errors/http-status/511-network-authentication-required";
import javascript_assignmenttoconstantvariable from "./errors/javascript/assignment-to-constant-variable";
import javascript_blockedbycorspolicy from "./errors/javascript/blocked-by-cors-policy";
import javascript_cannotreadpropertiesofnull from "./errors/javascript/cannot-read-properties-of-null";
import javascript_cannotreadpropertiesofundefined from "./errors/javascript/cannot-read-properties-of-undefined";
import javascript_cannotuseimportstatementoutsideamodule from "./errors/javascript/cannot-use-import-statement-outside-a-module";
import javascript_failedtofetch from "./errors/javascript/failed-to-fetch";
import javascript_maximumcallstacksizeexceeded from "./errors/javascript/maximum-call-stack-size-exceeded";
import javascript_rangeerror from "./errors/javascript/rangeerror";
import javascript_referenceerror from "./errors/javascript/referenceerror";
import javascript_syntaxerror from "./errors/javascript/syntaxerror";
import javascript_typeerror from "./errors/javascript/typeerror";
import javascript_unexpectedendofinput from "./errors/javascript/unexpected-end-of-input";
import javascript_unexpectedtoken from "./errors/javascript/unexpected-token";
import javascript_variableisnotdefined from "./errors/javascript/variable-is-not-defined";
import javascript_xisnotafunction from "./errors/javascript/x-is-not-a-function";
import kubernetes_backoffrestartingfailedcontainer from "./errors/kubernetes/back-off-restarting-failed-container";
import kubernetes_certificatehasexpired from "./errors/kubernetes/certificate-has-expired";
import kubernetes_connectionrefused from "./errors/kubernetes/connection-refused";
import kubernetes_containercreatingstuck from "./errors/kubernetes/containercreating-stuck";
import kubernetes_contextdeadlineexceeded from "./errors/kubernetes/context-deadline-exceeded";
import kubernetes_crashloopbackoff from "./errors/kubernetes/crashloopbackoff";
import kubernetes_createcontainerconfigerror from "./errors/kubernetes/createcontainerconfigerror";
import kubernetes_createcontainererror from "./errors/kubernetes/createcontainererror";
import kubernetes_dialtcptimeout from "./errors/kubernetes/dial-tcp-timeout";
import kubernetes_errimagepull from "./errors/kubernetes/errimagepull";
import kubernetes_failedattachvolume from "./errors/kubernetes/failedattachvolume";
import kubernetes_failedmount from "./errors/kubernetes/failedmount";
import kubernetes_failedscheduling from "./errors/kubernetes/failedscheduling";
import kubernetes_forbiddenusercannotlistresource from "./errors/kubernetes/forbidden-user-cannot-list-resource";
import kubernetes_imagepullbackoff from "./errors/kubernetes/imagepullbackoff";
import kubernetes_kubectlunabletoconnecttotheserver from "./errors/kubernetes/kubectl-unable-to-connect-to-the-server";
import kubernetes_livenessprobefailed from "./errors/kubernetes/liveness-probe-failed";
import kubernetes_nodenotready from "./errors/kubernetes/node-notready";
import kubernetes_oomkilled from "./errors/kubernetes/oomkilled";
import kubernetes_pendingpod from "./errors/kubernetes/pending-pod";
import kubernetes_pvcpending from "./errors/kubernetes/pvc-pending";
import kubernetes_readinessprobefailed from "./errors/kubernetes/readiness-probe-failed";
import kubernetes_tlshandshaketimeout from "./errors/kubernetes/tls-handshake-timeout";
import kubernetes_unauthorized from "./errors/kubernetes/unauthorized";
import kubernetes_x509certificatesignedbyunknownauthority from "./errors/kubernetes/x509-certificate-signed-by-unknown-authority";
import linux_commandnotfound from "./errors/linux/command-not-found";
import linux_connectionrefused from "./errors/linux/connection-refused";
import linux_couldnotgetlock from "./errors/linux/could-not-get-lock";
import linux_killed from "./errors/linux/killed";
import linux_nospaceleftondevice from "./errors/linux/no-space-left-on-device";
import linux_nosuchfileordirectory from "./errors/linux/no-such-file-or-directory";
import linux_operationnotpermitted from "./errors/linux/operation-not-permitted";
import linux_outofmemory from "./errors/linux/out-of-memory";
import linux_permissiondenied from "./errors/linux/permission-denied";
import linux_permissiondeniedpublickey from "./errors/linux/permission-denied-publickey";
import linux_readonlyfilesystem from "./errors/linux/read-only-file-system";
import linux_segmentationfault from "./errors/linux/segmentation-fault";
import linux_sudocommandnotfound from "./errors/linux/sudo-command-not-found";
import linux_temporaryfailureinnameresolution from "./errors/linux/temporary-failure-in-name-resolution";
import linux_unabletolocatepackage from "./errors/linux/unable-to-locate-package";
import nodejs_aborterror from "./errors/nodejs/aborterror";
import nodejs_eacces from "./errors/nodejs/eacces";
import nodejs_eaddrinuse from "./errors/nodejs/eaddrinuse";
import nodejs_econnrefused from "./errors/nodejs/econnrefused";
import nodejs_econnreset from "./errors/nodejs/econnreset";
import nodejs_enoent from "./errors/nodejs/enoent";
import nodejs_enotfound from "./errors/nodejs/enotfound";
import nodejs_errbufferoutofbounds from "./errors/nodejs/err-buffer-out-of-bounds";
import nodejs_errhttpheaderssent from "./errors/nodejs/err-http-headers-sent";
import nodejs_errinvalidargtype from "./errors/nodejs/err-invalid-arg-type";
import nodejs_errmodulenotfound from "./errors/nodejs/err-module-not-found";
import nodejs_errosslevpunsupported from "./errors/nodejs/err-ossl-evp-unsupported";
import nodejs_erroutofrange from "./errors/nodejs/err-out-of-range";
import nodejs_errrequireesm from "./errors/nodejs/err-require-esm";
import nodejs_errtlscertaltnameinvalid from "./errors/nodejs/err-tls-cert-altname-invalid";
import nodejs_etimedout from "./errors/nodejs/etimedout";
import nodejs_modulenotfound from "./errors/nodejs/module_not_found";
import nodejs_referenceerror from "./errors/nodejs/referenceerror";
import nodejs_typeerror from "./errors/nodejs/typeerror";
import nodejs_unhandledpromiserejectionwarning from "./errors/nodejs/unhandledpromiserejectionwarning";
import python_attributeerror from "./errors/python/attributeerror";
import python_filenotfounderror from "./errors/python/filenotfounderror";
import python_importerror from "./errors/python/importerror";
import python_indentationerror from "./errors/python/indentationerror";
import python_indexerror from "./errors/python/indexerror";
import python_invalidsyntax from "./errors/python/invalid-syntax";
import python_keyerror from "./errors/python/keyerror";
import python_listindexoutofrange from "./errors/python/list-index-out-of-range";
import python_modulenotfounderror from "./errors/python/modulenotfounderror";
import python_nameerror from "./errors/python/nameerror";
import python_nomatchingdistributionfound from "./errors/python/no-matching-distribution-found";
import python_objecthasnoattribute from "./errors/python/object-has-no-attribute";
import python_objectisnotcallable from "./errors/python/object-is-not-callable";
import python_permissionerror from "./errors/python/permissionerror";
import python_runtimewarningcoroutinewasneverawaited from "./errors/python/runtimewarning-coroutine-was-never-awaited";
import python_syntaxerror from "./errors/python/syntaxerror";
import python_typeerror from "./errors/python/typeerror";
import python_unexpectedindent from "./errors/python/unexpected-indent";
import python_valueerror from "./errors/python/valueerror";
import python_zerodivisionerror from "./errors/python/zerodivisionerror";
import react_cannotupdateacomponentwhilerenderinganothercomponent from "./errors/react/cannot-update-a-component-while-rendering-another-component";
import react_eachchildshouldhaveauniquekey from "./errors/react/each-child-should-have-a-unique-key";
import react_elementtypeisinvalid from "./errors/react/element-type-is-invalid";
import react_failedtocompile from "./errors/react/failed-to-compile";
import react_functioncomponentscannotbegivenrefs from "./errors/react/function-components-cannot-be-given-refs";
import react_hydrationfailed from "./errors/react/hydration-failed";
import react_invalidhookcall from "./errors/react/invalid-hook-call";
import react_maximumupdatedepthexceeded from "./errors/react/maximum-update-depth-exceeded";
import react_minifiedreacterror130 from "./errors/react/minified-react-error-130";
import react_minifiedreacterror31 from "./errors/react/minified-react-error-31";
import react_nothingwasreturnedfromrender from "./errors/react/nothing-was-returned-from-render";
import react_objectsarenotvalidasareactchild from "./errors/react/objects-are-not-valid-as-a-react-child";
import react_textcontentdoesnotmatchserverrenderedhtml from "./errors/react/text-content-does-not-match-server-rendered-html";
import react_toomanyrerenders from "./errors/react/too-many-re-renders";
import react_usenavigatemayonlybeusedinsiderouter from "./errors/react/usenavigate-may-only-be-used-inside-router";

export const errorsData: ErrorInfo[] = [
  aws_accessdenied,
  aws_accessdeniedexception,
  aws_bucketalreadyexists,
  aws_bucketalreadyownedbyyou,
  aws_expiredtoken,
  aws_invalidclienttokenid,
  aws_nocredentialproviders,
  aws_requestlimitexceeded,
  aws_resourcenotfoundexception,
  aws_throttlingexception,
  aws_unabletolocatecredentials,
  aws_validationexception,
  docker_cannotconnecttothedockerdaemon,
  docker_containerexitedwithcode137,
  docker_dockerdaemonisnotrunning,
  docker_dockerfileparseerror,
  docker_dockersocketpermissiondenied,
  docker_exitcode125,
  docker_exitcode126,
  docker_exitcode127,
  docker_exitcode137,
  docker_failedtosolve,
  docker_imagenotfound,
  docker_manifestunknown,
  docker_networknotfound,
  docker_nospaceleftondevice,
  docker_ociruntimecreatefailed,
  docker_oomkilled,
  docker_permissiondenied,
  docker_portisalreadyallocated,
  docker_pullaccessdenied,
  docker_volumenotfound,
  git_anothergitprocessseemstoberunning,
  git_authenticationfailed,
  git_authoridentityunknown,
  git_automaticmergefailed,
  git_failedtopushsomerefs,
  git_fatalnotagitrepository,
  git_headdetached,
  git_mergeconflict,
  git_nonfastforward,
  git_pathspecdidnotmatchanyfiles,
  git_permissiondeniedpublickey,
  git_remoteoriginalreadyexists,
  git_repositorynotfound,
  git_srcrefspecdoesnotmatchany,
  git_yourlocalchangeswouldbeoverwritten,
  httpstatus_100continue,
  httpstatus_101switchingprotocols,
  httpstatus_102processing,
  httpstatus_103earlyhints,
  httpstatus_200ok,
  httpstatus_201created,
  httpstatus_202accepted,
  httpstatus_203nonauthoritativeinformation,
  httpstatus_204nocontent,
  httpstatus_205resetcontent,
  httpstatus_206partialcontent,
  httpstatus_207multistatus,
  httpstatus_208alreadyreported,
  httpstatus_226imused,
  httpstatus_300multiplechoices,
  httpstatus_301movedpermanently,
  httpstatus_302found,
  httpstatus_303seeother,
  httpstatus_304notmodified,
  httpstatus_305useproxy,
  httpstatus_306switchproxy,
  httpstatus_307temporaryredirect,
  httpstatus_308permanentredirect,
  httpstatus_400badrequest,
  httpstatus_401unauthorized,
  httpstatus_402paymentrequired,
  httpstatus_403forbidden,
  httpstatus_404notfound,
  httpstatus_405methodnotallowed,
  httpstatus_406notacceptable,
  httpstatus_407proxyauthenticationrequired,
  httpstatus_408requesttimeout,
  httpstatus_409conflict,
  httpstatus_410gone,
  httpstatus_411lengthrequired,
  httpstatus_412preconditionfailed,
  httpstatus_413contenttoolarge,
  httpstatus_414uritoolong,
  httpstatus_415unsupportedmediatype,
  httpstatus_416rangenotsatisfiable,
  httpstatus_417expectationfailed,
  httpstatus_418imateapot,
  httpstatus_421misdirectedrequest,
  httpstatus_422unprocessablecontent,
  httpstatus_423locked,
  httpstatus_424faileddependency,
  httpstatus_425tooearly,
  httpstatus_426upgraderequired,
  httpstatus_428preconditionrequired,
  httpstatus_429toomanyrequests,
  httpstatus_431requestheaderfieldstoolarge,
  httpstatus_451unavailableforlegalreasons,
  httpstatus_500internalservererror,
  httpstatus_501notimplemented,
  httpstatus_502badgateway,
  httpstatus_503serviceunavailable,
  httpstatus_504gatewaytimeout,
  httpstatus_505httpversionnotsupported,
  httpstatus_506variantalsonegotiates,
  httpstatus_507insufficientstorage,
  httpstatus_508loopdetected,
  httpstatus_510notextended,
  httpstatus_511networkauthenticationrequired,
  javascript_assignmenttoconstantvariable,
  javascript_blockedbycorspolicy,
  javascript_cannotreadpropertiesofnull,
  javascript_cannotreadpropertiesofundefined,
  javascript_cannotuseimportstatementoutsideamodule,
  javascript_failedtofetch,
  javascript_maximumcallstacksizeexceeded,
  javascript_rangeerror,
  javascript_referenceerror,
  javascript_syntaxerror,
  javascript_typeerror,
  javascript_unexpectedendofinput,
  javascript_unexpectedtoken,
  javascript_variableisnotdefined,
  javascript_xisnotafunction,
  kubernetes_backoffrestartingfailedcontainer,
  kubernetes_certificatehasexpired,
  kubernetes_connectionrefused,
  kubernetes_containercreatingstuck,
  kubernetes_contextdeadlineexceeded,
  kubernetes_crashloopbackoff,
  kubernetes_createcontainerconfigerror,
  kubernetes_createcontainererror,
  kubernetes_dialtcptimeout,
  kubernetes_errimagepull,
  kubernetes_failedattachvolume,
  kubernetes_failedmount,
  kubernetes_failedscheduling,
  kubernetes_forbiddenusercannotlistresource,
  kubernetes_imagepullbackoff,
  kubernetes_kubectlunabletoconnecttotheserver,
  kubernetes_livenessprobefailed,
  kubernetes_nodenotready,
  kubernetes_oomkilled,
  kubernetes_pendingpod,
  kubernetes_pvcpending,
  kubernetes_readinessprobefailed,
  kubernetes_tlshandshaketimeout,
  kubernetes_unauthorized,
  kubernetes_x509certificatesignedbyunknownauthority,
  linux_commandnotfound,
  linux_connectionrefused,
  linux_couldnotgetlock,
  linux_killed,
  linux_nospaceleftondevice,
  linux_nosuchfileordirectory,
  linux_operationnotpermitted,
  linux_outofmemory,
  linux_permissiondenied,
  linux_permissiondeniedpublickey,
  linux_readonlyfilesystem,
  linux_segmentationfault,
  linux_sudocommandnotfound,
  linux_temporaryfailureinnameresolution,
  linux_unabletolocatepackage,
  nodejs_aborterror,
  nodejs_eacces,
  nodejs_eaddrinuse,
  nodejs_econnrefused,
  nodejs_econnreset,
  nodejs_enoent,
  nodejs_enotfound,
  nodejs_errbufferoutofbounds,
  nodejs_errhttpheaderssent,
  nodejs_errinvalidargtype,
  nodejs_errmodulenotfound,
  nodejs_errosslevpunsupported,
  nodejs_erroutofrange,
  nodejs_errrequireesm,
  nodejs_errtlscertaltnameinvalid,
  nodejs_etimedout,
  nodejs_modulenotfound,
  nodejs_referenceerror,
  nodejs_typeerror,
  nodejs_unhandledpromiserejectionwarning,
  python_attributeerror,
  python_filenotfounderror,
  python_importerror,
  python_indentationerror,
  python_indexerror,
  python_invalidsyntax,
  python_keyerror,
  python_listindexoutofrange,
  python_modulenotfounderror,
  python_nameerror,
  python_nomatchingdistributionfound,
  python_objecthasnoattribute,
  python_objectisnotcallable,
  python_permissionerror,
  python_runtimewarningcoroutinewasneverawaited,
  python_syntaxerror,
  python_typeerror,
  python_unexpectedindent,
  python_valueerror,
  python_zerodivisionerror,
  react_cannotupdateacomponentwhilerenderinganothercomponent,
  react_eachchildshouldhaveauniquekey,
  react_elementtypeisinvalid,
  react_failedtocompile,
  react_functioncomponentscannotbegivenrefs,
  react_hydrationfailed,
  react_invalidhookcall,
  react_maximumupdatedepthexceeded,
  react_minifiedreacterror130,
  react_minifiedreacterror31,
  react_nothingwasreturnedfromrender,
  react_objectsarenotvalidasareactchild,
  react_textcontentdoesnotmatchserverrenderedhtml,
  react_toomanyrerenders,
  react_usenavigatemayonlybeusedinsiderouter
];
