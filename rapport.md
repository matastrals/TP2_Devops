[matastral@tpDockerDevops TP2_Devops]$ trivy image single_stage
2025-02-18T10:51:28.215+0100    INFO    Need to update DB
2025-02-18T10:51:28.217+0100    INFO    DB Repository: ghcr.io/aquasecurity/trivy-db
2025-02-18T10:51:28.218+0100    INFO    Downloading DB...
59.23 MiB / 59.23 MiB [---------------------------------------------------------------------] 100.00% 12.83 MiB p/s 4.8s
2025-02-18T10:51:33.809+0100    INFO    Vulnerability scanning is enabled
2025-02-18T10:51:33.811+0100    INFO    Secret scanning is enabled
2025-02-18T10:51:33.813+0100    INFO    If your scanning is slow, please try '--security-checks vuln' to disable secret scanning
2025-02-18T10:51:33.815+0100    INFO    Please see also https://aquasecurity.github.io/trivy/v0.35/docs/secret/scanning/#recommendation for faster secret detection
2025-02-18T10:51:45.234+0100    INFO    Detected OS: debian
2025-02-18T10:51:45.237+0100    INFO    Detecting Debian vulnerabilities...
2025-02-18T10:51:45.291+0100    INFO    Number of language-specific files: 1
2025-02-18T10:51:45.293+0100    INFO    Detecting node-pkg vulnerabilities...

single_stage (debian 12.9)

Total: 77 (UNKNOWN: 0, LOW: 57, MEDIUM: 18, HIGH: 1, CRITICAL: 1)

┌────────────────────┬─────────────────────┬──────────┬───────────────────────┬──────────────────┬──────────────────────────────────────────────────────────────┐
│      Library       │    Vulnerability    │ Severity │   Installed Version   │  Fixed Version   │                            Title                             │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ apt                │ CVE-2011-3374       │ LOW      │ 2.6.1                 │                  │ It was found that apt-key in apt, all versions, do not       │
│                    │                     │          │                       │                  │ correctly...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2011-3374                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ bash               │ TEMP-0841856-B18BAF │          │ 5.2.15-2              │                  │ [Privilege escalation possible to other user than root]      │
│                    │                     │          │                       │                  │ https://security-tracker.debian.org/tracker/TEMP-0841856-B1- │
│                    │                     │          │                       │                  │ 8BAF
                                        │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ bsdutils           │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ coreutils          │ CVE-2016-2781       │          │ 9.1-1                 │                  │ coreutils: Non-privileged session can escape to the parent   │
│                    │                     │          │                       │                  │ session in chroot
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2016-2781                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2017-18018      │          │                       │                  │ coreutils: race condition vulnerability in chown and chgrp   │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2017-18018                   │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ gcc-12-base        │ CVE-2022-27943      │          │ 12.2.0-14             │                  │ binutils: libiberty/rust-demangle.c in GNU GCC 11.2 allows   │
│                    │                     │          │                       │                  │ stack exhaustion in demangle_const                           │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-27943                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-4039       │          │                       │                  │ gcc: -fstack-protector fails to guard dynamic stack          │
│                    │                     │          │                       │                  │ allocations on ARM64
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-4039                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ gpgv               │ CVE-2022-3219       │          │ 2.2.40-1.1            │                  │ gnupg: denial of service issue (resource consumption) using  │
│                    │                     │          │                       │                  │ compressed packets
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-3219                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libapt-pkg6.0      │ CVE-2011-3374       │          │ 2.6.1                 │                  │ It was found that apt-key in apt, all versions, do not       │
│                    │                     │          │                       │                  │ correctly...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2011-3374                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libblkid1          │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libc-bin           │ CVE-2025-0395       │ MEDIUM   │ 2.36-9+deb12u9        │                  │ glibc: buffer overflow in the GNU C Library's assert()       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2025-0395                    │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2010-4756       │ LOW      │                       │                  │ glibc: glob implementation can cause excessive CPU and       │
│                    │                     │          │                       │                  │ memory consumption due to...                                 │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2010-4756                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2018-20796      │          │                       │                  │ glibc: uncontrolled recursion in function                    │
│                    │                     │          │                       │                  │ check_dst_limits_calc_pos_1 in posix/regexec.c               │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2018-20796                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010022    │          │                       │                  │ glibc: stack guard protection bypass                         │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010022                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010023    │          │                       │                  │ glibc: running ldd on malicious ELF leads to code execution  │
│                    │                     │          │                       │                  │ because of...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010023                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010024    │          │                       │                  │ glibc: ASLR bypass using cache of thread stack and heap      │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010024                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010025    │          │                       │                  │ glibc: information disclosure of heap addresses of           │
│                    │                     │          │                       │                  │ pthread_created thread                                       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010025                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-9192       │          │                       │                  │ glibc: uncontrolled recursion in function                    │
│                    │                     │          │                       │                  │ check_dst_limits_calc_pos_1 in posix/regexec.c               │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-9192                    │
├────────────────────┼─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│ libc6              │ CVE-2025-0395       │ MEDIUM   │                       │                  │ glibc: buffer overflow in the GNU C Library's assert()       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2025-0395                    │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2010-4756       │ LOW      │                       │                  │ glibc: glob implementation can cause excessive CPU and       │
│                    │                     │          │                       │                  │ memory consumption due to...                                 │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2010-4756                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2018-20796      │          │                       │                  │ glibc: uncontrolled recursion in function                    │
│                    │                     │          │                       │                  │ check_dst_limits_calc_pos_1 in posix/regexec.c               │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2018-20796                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010022    │          │                       │                  │ glibc: stack guard protection bypass                         │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010022                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010023    │          │                       │                  │ glibc: running ldd on malicious ELF leads to code execution  │
│                    │                     │          │                       │                  │ because of...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010023                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010024    │          │                       │                  │ glibc: ASLR bypass using cache of thread stack and heap      │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010024                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-1010025    │          │                       │                  │ glibc: information disclosure of heap addresses of           │
│                    │                     │          │                       │                  │ pthread_created thread                                       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-1010025                 │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2019-9192       │          │                       │                  │ glibc: uncontrolled recursion in function                    │
│                    │                     │          │                       │                  │ check_dst_limits_calc_pos_1 in posix/regexec.c               │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2019-9192                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libgcc-s1          │ CVE-2022-27943      │          │ 12.2.0-14             │                  │ binutils: libiberty/rust-demangle.c in GNU GCC 11.2 allows   │
│                    │                     │          │                       │                  │ stack exhaustion in demangle_const                           │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-27943                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-4039       │          │                       │                  │ gcc: -fstack-protector fails to guard dynamic stack          │
│                    │                     │          │                       │                  │ allocations on ARM64
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-4039                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libgcrypt20        │ CVE-2024-2236       │ MEDIUM   │ 1.10.1-3              │                  │ libgcrypt: vulnerable to Marvin Attack                       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-2236                    │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2018-6829       │ LOW      │                       │                  │ libgcrypt: ElGamal implementation doesn't have semantic      │
│                    │                     │          │                       │                  │ security due to incorrectly encoded plaintexts...            │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2018-6829                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libgnutls30        │ CVE-2024-12243      │ MEDIUM   │ 3.7.9-2+deb12u3       │ 3.7.9-2+deb12u4  │ gnutls: GnuTLS Impacted by Inefficient DER Decoding in       │
│                    │                     │          │                       │                  │ libtasn1 Leading to Remote...                                │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-12243                   │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2011-3389       │ LOW      │                       │                  │ HTTPS: block-wise chosen-plaintext attack against SSL/TLS    │
│                    │                     │          │                       │                  │ (BEAST)
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2011-3389                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libmount1          │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libpam-modules     │ CVE-2024-10041      │ MEDIUM   │ 1.5.2-6+deb12u1       │                  │ pam: libpam: Libpam vulnerable to read hashed password       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-10041                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-22365      │          │                       │                  │ pam: allowing unprivileged user to block another user        │
│                    │                     │          │                       │                  │ namespace
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-22365                   │
├────────────────────┼─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│ libpam-modules-bin │ CVE-2024-10041      │          │                       │                  │ pam: libpam: Libpam vulnerable to read hashed password       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-10041                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-22365      │          │                       │                  │ pam: allowing unprivileged user to block another user        │
│                    │                     │          │                       │                  │ namespace
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-22365                   │
├────────────────────┼─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│ libpam-runtime     │ CVE-2024-10041      │          │                       │                  │ pam: libpam: Libpam vulnerable to read hashed password       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-10041                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-22365      │          │                       │                  │ pam: allowing unprivileged user to block another user        │
│                    │                     │          │                       │                  │ namespace
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-22365                   │
├────────────────────┼─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│ libpam0g           │ CVE-2024-10041      │          │                       │                  │ pam: libpam: Libpam vulnerable to read hashed password       │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-10041                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-22365      │          │                       │                  │ pam: allowing unprivileged user to block another user        │
│                    │                     │          │                       │                  │ namespace
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-22365                   │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libsmartcols1      │ CVE-2022-0563       │ LOW      │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libstdc++6         │ CVE-2022-27943      │          │ 12.2.0-14             │                  │ binutils: libiberty/rust-demangle.c in GNU GCC 11.2 allows   │
│                    │                     │          │                       │                  │ stack exhaustion in demangle_const                           │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-27943                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-4039       │          │                       │                  │ gcc: -fstack-protector fails to guard dynamic stack          │
│                    │                     │          │                       │                  │ allocations on ARM64
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-4039                    │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libsystemd0        │ CVE-2013-4392       │          │ 252.33-1~deb12u1      │                  │ systemd: TOCTOU race condition when updating file            │
│                    │                     │          │                       │                  │ permissions and SELinux security contexts...                 │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2013-4392                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31437      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ modify a...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31437                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31438      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ truncate a...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31438                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31439      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ modify the...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31439                   │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libtasn1-6         │ CVE-2024-12133      │ MEDIUM   │ 4.19.0-2              │ 4.19.0-2+deb12u1 │ libtasn1: Inefficient DER Decoding in libtasn1 Leading to    │
│                    │                     │          │                       │                  │ Potential Remote DoS
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-12133                   │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libtinfo6          │ CVE-2023-50495      │          │ 6.4-4                 │                  │ ncurses: segmentation fault via _nc_wrap_entry()             │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-50495                   │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libudev1           │ CVE-2013-4392       │ LOW      │ 252.33-1~deb12u1      │                  │ systemd: TOCTOU race condition when updating file            │
│                    │                     │          │                       │                  │ permissions and SELinux security contexts...                 │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2013-4392                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31437      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ modify a...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31437                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31438      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ truncate a...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31438                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31439      │          │                       │                  │ An issue was discovered in systemd 253. An attacker can      │
│                    │                     │          │                       │                  │ modify the...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31439                   │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ libuuid1           │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ login              │ CVE-2023-4641       │ MEDIUM   │ 1:4.13+dfsg1-1        │                  │ shadow-utils: possible password leak during passwd(1) change │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-4641                    │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2007-5686       │ LOW      │                       │                  │ initscripts in rPath Linux 1 sets insecure permissions for   │
│                    │                     │          │                       │                  │ the /var/lo ......
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2007-5686                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-29383      │          │                       │                  │ shadow: Improper input validation in shadow-utils package    │
│                    │                     │          │                       │                  │ utility chfn
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-29383                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-56433      │          │                       │                  │ shadow-utils: Default subordinate ID configuration in        │
│                    │                     │          │                       │                  │ /etc/login.defs could lead to compromise                     │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-56433                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ TEMP-0628843-DBAD28 │          │                       │                  │ [more related to CVE-2005-4890]                              │
│                    │                     │          │                       │                  │ https://security-tracker.debian.org/tracker/TEMP-0628843-DB- │
│                    │                     │          │                       │                  │ AD28
                                        │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ mount              │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ ncurses-base       │ CVE-2023-50495      │ MEDIUM   │ 6.4-4                 │                  │ ncurses: segmentation fault via _nc_wrap_entry()             │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-50495                   │
├────────────────────┤                     │          │                       ├──────────────────┤
                                        │
│ ncurses-bin        │                     │          │                       │                  │
                                        │
│                    │                     │          │                       │                  │
                                        │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ passwd             │ CVE-2023-4641       │          │ 1:4.13+dfsg1-1        │                  │ shadow-utils: possible password leak during passwd(1) change │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-4641                    │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2007-5686       │ LOW      │                       │                  │ initscripts in rPath Linux 1 sets insecure permissions for   │
│                    │                     │          │                       │                  │ the /var/lo ......
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2007-5686                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-29383      │          │                       │                  │ shadow: Improper input validation in shadow-utils package    │
│                    │                     │          │                       │                  │ utility chfn
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-29383                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2024-56433      │          │                       │                  │ shadow-utils: Default subordinate ID configuration in        │
│                    │                     │          │                       │                  │ /etc/login.defs could lead to compromise                     │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2024-56433                   │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ TEMP-0628843-DBAD28 │          │                       │                  │ [more related to CVE-2005-4890]                              │
│                    │                     │          │                       │                  │ https://security-tracker.debian.org/tracker/TEMP-0628843-DB- │
│                    │                     │          │                       │                  │ AD28
                                        │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ perl-base          │ CVE-2023-31484      │ HIGH     │ 5.36.0-7+deb12u1      │                  │ perl: CPAN.pm does not verify TLS certificates when          │
│                    │                     │          │                       │                  │ downloading distributions over HTTPS...                      │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31484                   │
│                    ├─────────────────────┼──────────┤                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2011-4116       │ LOW      │                       │                  │ perl: File:: Temp insecure temporary file handling           │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2011-4116                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ CVE-2023-31486      │          │                       │                  │ http-tiny: insecure TLS cert default                         │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-31486                   │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ sysvinit-utils     │ TEMP-0517018-A83CE6 │          │ 3.06-4                │                  │ [sysvinit: no-root option in expert installer exposes        │
│                    │                     │          │                       │                  │ locally exploitable security flaw]                           │
│                    │                     │          │                       │                  │ https://security-tracker.debian.org/tracker/TEMP-0517018-A8- │
│                    │                     │          │                       │                  │ 3CE6
                                        │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ tar                │ CVE-2005-2541       │          │ 1.34+dfsg-1.2+deb12u1 │                  │ tar: does not properly warn the user when extracting setuid  │
│                    │                     │          │                       │                  │ or setgid...
                                        │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2005-2541                    │
│                    ├─────────────────────┤          │                       ├──────────────────┼──────────────────────────────────────────────────────────────┤
│                    │ TEMP-0290435-0B57B5 │          │                       │                  │ [tar's rmt command may have undesired side effects]          │
│                    │                     │          │                       │                  │ https://security-tracker.debian.org/tracker/TEMP-0290435-0B- │
│                    │                     │          │                       │                  │ 57B5
                                        │
├────────────────────┼─────────────────────┤          ├───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ util-linux         │ CVE-2022-0563       │          │ 2.38.1-5+deb12u3      │                  │ util-linux: partial disclosure of arbitrary files in chfn    │
│                    │                     │          │                       │                  │ and chsh when compiled...                                    │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2022-0563                    │
├────────────────────┤                     │          │                       ├──────────────────┤
                                        │
│ util-linux-extra   │                     │          │                       │                  │
                                        │
│                    │                     │          │                       │                  │
                                        │
│                    │                     │          │                       │                  │
                                        │
├────────────────────┼─────────────────────┼──────────┼───────────────────────┼──────────────────┼──────────────────────────────────────────────────────────────┤
│ zlib1g             │ CVE-2023-45853      │ CRITICAL │ 1:1.2.13.dfsg-1       │                  │ zlib: integer overflow and resultant heap-based buffer       │
│                    │                     │          │                       │                  │ overflow in zipOpenNewFileInZip4_6                           │
│                    │                     │          │                       │                  │ https://avd.aquasec.com/nvd/cve-2023-45853                   │
└────────────────────┴─────────────────────┴──────────┴───────────────────────┴──────────────────┴──────────────────────────────────────────────────────────────┘
2025-02-18T10:51:45.437+0100    INFO    Table result includes only package filenames. Use '--format json' option to get the full path to the package file.

Node.js (node-pkg)

Total: 1 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 1, CRITICAL: 0)

┌────────────────────────────┬────────────────┬──────────┬───────────────────┬───────────────┬───────────────────────────────────────────────────┐
│          Library           │ Vulnerability  │ Severity │ Installed Version │ Fixed Version │                       Title                       │
├────────────────────────────┼────────────────┼──────────┼───────────────────┼───────────────┼───────────────────────────────────────────────────┤
│ cross-spawn (package.json) │ CVE-2024-21538 │ HIGH     │ 7.0.3             │ 7.0.5, 6.0.6  │ cross-spawn: regular expression denial of service │
│                            │                │          │                   │               │ https://avd.aquasec.com/nvd/cve-2024-21538        │
└────────────────────────────┴────────────────┴──────────┴───────────────────┴───────────────┴───────────────────────────────────────────────────┘
