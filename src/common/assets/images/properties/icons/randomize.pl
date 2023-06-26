#!/usr/bin/perl 

use strict;
use warnings;
use Data::Dumper;
use List::Util qw(shuffle);

open(FILES, "ls *.png |") || die;
my @icons = ();
while(<FILES>) {
  chomp; 
  push(@icons, $_);
}
close(FILES);

my @randomarray = shuffle(@icons);
print Dumper(\@randomarray);

for (my $i=0; $i < 256; $i++) {
	my $newname = sprintf("avatar-%.2X.png", $i);
	printf("%d\t%.2X\t%s\t%s\n", $i, $i, $randomarray[$i], $newname);
	rename($randomarray[$i], $newname);
}
