local_bin=$2
global_bin=$3
GREEN=$'\033[1;32m'
RED=$'\033[1;31m'
NONE=$'\033[m'

function getBin {
  if [ -e "${local_bin}/${1}" ]; then
    bin="${local_bin}/${1}"
  elif [ -e "${global_bin}/${1}" ]; then
    bin="${global_bin}/${1}"
  else
    echo "${RED}Error! No '${1}' binary found!${NONE}"
    exit 1
  fi
}
