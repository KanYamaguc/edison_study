# edison_study

init

```
echo "src/gz all http://repo.opkg.net/edison/repo/all" >> /etc/opkg/base-feeds.conf
echo "src/gz edison http://repo.opkg.net/edison/repo/edison" >> /etc/opkg/base-feeds.conf
echo "src/gz core2-32 http://repo.opkg.net/edison/repo/core2-32" >> /etc/opkg/base-feeds.conf
```

```
$ touch /etc/opkg/intel-iotdk.conf
echo "src intel-iotdk http://iotdk.intel.com/repos/1.1/intelgalactic" >> /etc/opkg/intel-iotdk.conf
echo "src intel-all http://iotdk.intel.com/repos/1.1/iotdk/all" >> /etc/opkg/intel-iotdk.conf
echo "src intel-i586 http://iotdk.intel.com/repos/1.1/iotdk/i586" >> /etc/opkg/intel-iotdk.conf
echo "src intel-x86 http://iotdk.intel.com/repos/1.1/iotdk/x86" >> /etc/opkg/intel-iotdk.conf
```

```
opkg update
opkg upgrade
```

```
opkg install git
```

```
git clone //github.com/KanYamaguc/edison_study.git
```

```
node hoge.js
```
