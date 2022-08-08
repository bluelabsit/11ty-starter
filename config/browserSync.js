/**
 *
 * @type {{lutimes: {(path: PathLike, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void}, realpath: {(path: PathLike, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), resolvedPath: string) => void): void, (path: PathLike, options: BufferEncodingOption, callback: (err: (NodeJS.ErrnoException | null), resolvedPath: Buffer) => void): void, (path: PathLike, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), resolvedPath: (string | Buffer)) => void): void, (path: PathLike, callback: (err: (NodeJS.ErrnoException | null), resolvedPath: string) => void): void}, readFileSync: {(path: PathOrFileDescriptor, options?: ({encoding?: null | undefined, flag?: string | undefined} | null)): Buffer, (path: PathOrFileDescriptor, options: ({encoding: BufferEncoding, flag?: string | undefined} | BufferEncoding)): string, (path: PathOrFileDescriptor, options?: ((ObjectEncodingOptions & {flag?: string | undefined}) | BufferEncoding | null)): (string | Buffer)}, ReadSyncOptions: ReadSyncOptions, rmdir: {(path: PathLike, callback: NoParamCallback): void, (path: PathLike, options: RmDirOptions, callback: NoParamCallback): void}, mkdtemp: {(prefix: string, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), folder: string) => void): void, (prefix: string, options: ("buffer" | {encoding: "buffer"}), callback: (err: (NodeJS.ErrnoException | null), folder: Buffer) => void): void, (prefix: string, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), folder: (string | Buffer)) => void): void, (prefix: string, callback: (err: (NodeJS.ErrnoException | null), folder: string) => void): void}, ObjectEncodingOptions: ObjectEncodingOptions, WatchOptions: WatchOptions, StatWatcher: StatWatcher, lstatSync: StatSyncFn, truncate: {(path: PathLike, len: (number | undefined | null), callback: NoParamCallback): void, (path: PathLike, callback: NoParamCallback): void}, PathLike: string | Buffer | URL, WatchEventType: "rename" | "change", readSync: {(fd: number, buffer: NodeJS.ArrayBufferView, offset: number, length: number, position: (ReadPosition | null)): number, (fd: number, buffer: NodeJS.ArrayBufferView, opts?: ReadSyncOptions): number}, write: {<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: (number | undefined | null), length: (number | undefined | null), position: (number | undefined | null), callback: (err: (NodeJS.ErrnoException | null), written: number, buffer: TBuffer) => void): void, <TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: (number | undefined | null), length: (number | undefined | null), callback: (err: (NodeJS.ErrnoException | null), written: number, buffer: TBuffer) => void): void, <TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: (number | undefined | null), callback: (err: (NodeJS.ErrnoException | null), written: number, buffer: TBuffer) => void): void, <TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, callback: (err: (NodeJS.ErrnoException | null), written: number, buffer: TBuffer) => void): void, (fd: number, string: string, position: (number | undefined | null), encoding: (BufferEncoding | undefined | null), callback: (err: (NodeJS.ErrnoException | null), written: number, str: string) => void): void, (fd: number, string: string, position: (number | undefined | null), callback: (err: (NodeJS.ErrnoException | null), written: number, str: string) => void): void, (fd: number, string: string, callback: (err: (NodeJS.ErrnoException | null), written: number, str: string) => void): void}, mkdir: {(path: PathLike, options: (MakeDirectoryOptions & {recursive: true}), callback: (err: (NodeJS.ErrnoException | null), path?: string) => void): void, (path: PathLike, options: (Mode | (MakeDirectoryOptions & {recursive?: false | undefined}) | null | undefined), callback: NoParamCallback): void, (path: PathLike, options: (Mode | MakeDirectoryOptions | null | undefined), callback: (err: (NodeJS.ErrnoException | null), path?: string) => void): void, (path: PathLike, callback: NoParamCallback): void}, promises: {opendir(path: PathLike, options?: OpenDirOptions): Promise<Dir>, FileReadOptions: FileReadOptions, FlagAndOpenMode: FlagAndOpenMode, readdir: {(path: PathLike, options?: ((ObjectEncodingOptions & {withFileTypes?: false | undefined}) | BufferEncoding | null)): Promise<string[]>, (path: PathLike, options: ({encoding: "buffer", withFileTypes?: false | undefined} | "buffer")): Promise<Buffer[]>, (path: PathLike, options?: ((ObjectEncodingOptions & {withFileTypes?: false | undefined}) | BufferEncoding | null)): Promise<string[] | Buffer[]>, (path: PathLike, options: (ObjectEncodingOptions & {withFileTypes: true})): Promise<Dirent[]>}, CreateReadStreamOptions: CreateReadStreamOptions, FileChangeInfo: FileChangeInfo, readFile: {(path: (PathLike | FileHandle), options?: (({encoding?: null | undefined, flag?: OpenMode | undefined} & Abortable) | null)): Promise<Buffer>, (path: (PathLike | FileHandle), options: (({encoding: BufferEncoding, flag?: OpenMode | undefined} & Abortable) | BufferEncoding)): Promise<string>, (path: (PathLike | FileHandle), options?: ((ObjectEncodingOptions & Abortable & {flag?: OpenMode | undefined}) | BufferEncoding | null)): Promise<string | Buffer>}, watch: {(filename: PathLike, options: ((WatchOptions & {encoding: "buffer"}) | "buffer")): AsyncIterable<FileChangeInfo<Buffer>>, (filename: PathLike, options?: (WatchOptions | BufferEncoding)): AsyncIterable<FileChangeInfo<string>>, (filename: PathLike, options: (WatchOptions | string)): (AsyncIterable<FileChangeInfo<string>> | AsyncIterable<FileChangeInfo<Buffer>>)}, appendFile(path: (PathLike | FileHandle), data: (string | Uint8Array), options?: ((ObjectEncodingOptions & FlagAndOpenMode) | BufferEncoding | null)): Promise<void>, open(path: PathLike, flags: (string | number), mode?: Mode): Promise<FileHandle>, lchmod(path: PathLike, mode: Mode): Promise<void>, chmod(path: PathLike, mode: Mode): Promise<void>, rm(path: PathLike, options?: RmOptions): Promise<void>, chown(path: PathLike, uid: number, gid: number): Promise<void>, CreateWriteStreamOptions: CreateWriteStreamOptions, lutimes(path: PathLike, atime: (string | number | Date), mtime: (string | number | Date)): Promise<void>, mkdir: {(path: PathLike, options: (MakeDirectoryOptions & {recursive: true})): Promise<string | undefined>, (path: PathLike, options?: (Mode | (MakeDirectoryOptions & {recursive?: false | undefined}) | null)): Promise<void>, (path: PathLike, options?: (Mode | MakeDirectoryOptions | null)): Promise<string | undefined>}, FileHandle: FileHandle, symlink(target: PathLike, path: PathLike, type?: (string | null)): Promise<void>, writeFile(file: (PathLike | FileHandle), data: (string | NodeJS.ArrayBufferView | Iterable<string | NodeJS.ArrayBufferView> | AsyncIterable<string | NodeJS.ArrayBufferView> | Stream), options?: ((ObjectEncodingOptions & {mode?: Mode | undefined, flag?: OpenMode | undefined} & Abortable) | BufferEncoding | null)): Promise<void>, access(path: PathLike, mode?: number): Promise<void>, truncate(path: PathLike, len?: number): Promise<void>, link(existingPath: PathLike, newPath: PathLike): Promise<void>, rmdir(path: PathLike, options?: RmDirOptions): Promise<void>, lchown(path: PathLike, uid: number, gid: number): Promise<void>, readlink: {(path: PathLike, options?: (ObjectEncodingOptions | BufferEncoding | null)): Promise<string>, (path: PathLike, options: BufferEncodingOption): Promise<Buffer>, (path: PathLike, options?: (ObjectEncodingOptions | string | null)): Promise<string | Buffer>}, lstat: {(path: PathLike, opts?: (StatOptions & {bigint?: false | undefined})): Promise<Stats>, (path: PathLike, opts: (StatOptions & {bigint: true})): Promise<BigIntStats>, (path: PathLike, opts?: StatOptions): Promise<Stats | BigIntStats>}, FileReadResult: FileReadResult, unlink(path: PathLike): Promise<void>, stat: {(path: PathLike, opts?: (StatOptions & {bigint?: false | undefined})): Promise<Stats>, (path: PathLike, opts: (StatOptions & {bigint: true})): Promise<BigIntStats>, (path: PathLike, opts?: StatOptions): Promise<Stats | BigIntStats>}, mkdtemp: {(prefix: string, options?: (ObjectEncodingOptions | BufferEncoding | null)): Promise<string>, (prefix: string, options: BufferEncodingOption): Promise<Buffer>, (prefix: string, options?: (ObjectEncodingOptions | BufferEncoding | null)): Promise<string | Buffer>}, utimes(path: PathLike, atime: (string | number | Date), mtime: (string | number | Date)): Promise<void>, cp(source: string, destination: string, opts?: CopyOptions): Promise<void>, copyFile(src: PathLike, dest: PathLike, mode?: number): Promise<void>, rename(oldPath: PathLike, newPath: PathLike): Promise<void>, realpath: {(path: PathLike, options?: (ObjectEncodingOptions | BufferEncoding | null)): Promise<string>, (path: PathLike, options: BufferEncodingOption): Promise<Buffer>, (path: PathLike, options?: (ObjectEncodingOptions | BufferEncoding | null)): Promise<string | Buffer>}}, TimeLike: string | number | Date, unwatchFile(filename: PathLike, listener?: (curr: Stats, prev: Stats) => void): void, futimes: {(fd: number, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void}, FSWatcher: FSWatcher, StatsBase: StatsBase, createReadStream(path: PathLike, options?: (BufferEncoding | ReadStreamOptions)): ReadStream, writeFileSync(file: PathOrFileDescriptor, data: (string | NodeJS.ArrayBufferView), options?: WriteFileOptions): void, writeSync: {(fd: number, buffer: NodeJS.ArrayBufferView, offset?: (number | null), length?: (number | null), position?: (number | null)): number, (fd: number, string: string, position?: (number | null), encoding?: (BufferEncoding | null)): number}, chownSync(path: PathLike, uid: number, gid: number): void, NoParamCallback: (err: (NodeJS.ErrnoException | null)) => void, rm: {(path: PathLike, callback: NoParamCallback): void, (path: PathLike, options: RmOptions, callback: NoParamCallback): void}, copyFile: {(src: PathLike, dest: PathLike, callback: NoParamCallback): void, (src: PathLike, dest: PathLike, mode: number, callback: NoParamCallback): void}, WatchListener: (event: WatchEventType, filename: T) => void, access: {(path: PathLike, mode: (number | undefined), callback: NoParamCallback): void, (path: PathLike, callback: NoParamCallback): void}, RmOptions: RmOptions, readdirSync: {(path: PathLike, options?: ({encoding: BufferEncoding | null, withFileTypes?: false | undefined} | BufferEncoding | null)): string[], (path: PathLike, options: ({encoding: "buffer", withFileTypes?: false | undefined} | "buffer")): Buffer[], (path: PathLike, options?: ((ObjectEncodingOptions & {withFileTypes?: false | undefined}) | BufferEncoding | null)): (string[] | Buffer[]), (path: PathLike, options: (ObjectEncodingOptions & {withFileTypes: true})): Dirent[]}, WriteVResult: WriteVResult, readdir: {(path: PathLike, options: ({encoding: BufferEncoding | null, withFileTypes?: false | undefined} | BufferEncoding | undefined | null), callback: (err: (NodeJS.ErrnoException | null), files: string[]) => void): void, (path: PathLike, options: ({encoding: "buffer", withFileTypes?: false | undefined} | "buffer"), callback: (err: (NodeJS.ErrnoException | null), files: Buffer[]) => void): void, (path: PathLike, options: ((ObjectEncodingOptions & {withFileTypes?: false | undefined}) | BufferEncoding | undefined | null), callback: (err: (NodeJS.ErrnoException | null), files: (string[] | Buffer[])) => void): void, (path: PathLike, callback: (err: (NodeJS.ErrnoException | null), files: string[]) => void): void, (path: PathLike, options: (ObjectEncodingOptions & {withFileTypes: true}), callback: (err: (NodeJS.ErrnoException | null), files: Dirent[]) => void): void}, existsSync(path: PathLike): boolean, lchownSync(path: PathLike, uid: number, gid: number): void, readlinkSync: {(path: PathLike, options?: EncodingOption): string, (path: PathLike, options: BufferEncodingOption): Buffer, (path: PathLike, options?: EncodingOption): (string | Buffer)}, symlink: {(target: PathLike, path: PathLike, type: (symlink.Type | undefined | null), callback: NoParamCallback): void, (target: PathLike, path: PathLike, callback: NoParamCallback): void}, Dirent: Dirent, fdatasyncSync(fd: number): void, fchmodSync(fd: number, mode: Mode): void, close: {(fd: number, callback?: NoParamCallback): void}, fdatasync: {(fd: number, callback: NoParamCallback): void}, realpathSync: {(path: PathLike, options?: EncodingOption): string, (path: PathLike, options: BufferEncodingOption): Buffer, (path: PathLike, options?: EncodingOption): (string | Buffer)}, stat: {(path: PathLike, callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (path: PathLike, options: ((StatOptions & {bigint?: false | undefined}) | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (path: PathLike, options: (StatOptions & {bigint: true}), callback: (err: (NodeJS.ErrnoException | null), stats: BigIntStats) => void): void, (path: PathLike, options: (StatOptions | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: (Stats | BigIntStats)) => void): void}, fchmod: {(fd: number, mode: Mode, callback: NoParamCallback): void}, BigIntOptions: BigIntOptions, unlinkSync(path: PathLike): void, fstat: {(fd: number, callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (fd: number, options: ((StatOptions & {bigint?: false | undefined}) | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (fd: number, options: (StatOptions & {bigint: true}), callback: (err: (NodeJS.ErrnoException | null), stats: BigIntStats) => void): void, (fd: number, options: (StatOptions | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: (Stats | BigIntStats)) => void): void}, truncateSync(path: PathLike, len?: (number | null)): void, Dir: Dir, cp: {(source: string, destination: string, callback: (err: (NodeJS.ErrnoException | null)) => void): void, (source: string, destination: string, opts: CopyOptions, callback: (err: (NodeJS.ErrnoException | null)) => void): void}, watch: {(filename: PathLike, options: ((WatchOptions & {encoding: "buffer"}) | "buffer"), listener?: WatchListener<Buffer>): FSWatcher, (filename: PathLike, options?: (WatchOptions | BufferEncoding | null), listener?: WatchListener<string>): FSWatcher, (filename: PathLike, options: (WatchOptions | string), listener?: WatchListener<string | Buffer>): FSWatcher, (filename: PathLike, listener?: WatchListener<string>): FSWatcher}, rename: {(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void}, readFile: {(path: PathOrFileDescriptor, options: (({encoding?: null | undefined, flag?: string | undefined} & Abortable) | undefined | null), callback: (err: (NodeJS.ErrnoException | null), data: Buffer) => void): void, (path: PathOrFileDescriptor, options: (({encoding: BufferEncoding, flag?: string | undefined} & Abortable) | BufferEncoding), callback: (err: (NodeJS.ErrnoException | null), data: string) => void): void, (path: PathOrFileDescriptor, options: ((ObjectEncodingOptions & {flag?: string | undefined} & Abortable) | BufferEncoding | undefined | null), callback: (err: (NodeJS.ErrnoException | null), data: (string | Buffer)) => void): void, (path: PathOrFileDescriptor, callback: (err: (NodeJS.ErrnoException | null), data: Buffer) => void): void}, exists: {(path: PathLike, callback: (exists: boolean) => void): void}, ftruncate: {(fd: number, len: (number | undefined | null), callback: NoParamCallback): void, (fd: number, callback: NoParamCallback): void}, WatchFileOptions: WatchFileOptions, open: {(path: PathLike, flags: OpenMode, mode: (Mode | undefined | null), callback: (err: (NodeJS.ErrnoException | null), fd: number) => void): void, (path: PathLike, flags: OpenMode, callback: (err: (NodeJS.ErrnoException | null), fd: number) => void): void}, lchmod: {(path: PathLike, mode: Mode, callback: NoParamCallback): void}, statSync: StatSyncFn, WriteStream: WriteStream, BigIntStats: BigIntStats, readvSync(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): number, EncodingOption: ObjectEncodingOptions | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex", closeSync(fd: number): void, PathOrFileDescriptor: string | Buffer | URL | number, renameSync(oldPath: PathLike, newPath: PathLike): void, WriteFileOptions: (ObjectEncodingOptions & Abortable & {mode?: Mode | undefined, flag?: string | undefined}) | "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex", copyFileSync(src: PathLike, dest: PathLike, mode?: number): void, linkSync(existingPath: PathLike, newPath: PathLike): void, CopyOptions: CopyOptions, constants: constants, mkdirSync: {(path: PathLike, options: (MakeDirectoryOptions & {recursive: true})): (string | undefined), (path: PathLike, options?: (Mode | (MakeDirectoryOptions & {recursive?: false | undefined}) | null)): void, (path: PathLike, options?: (Mode | MakeDirectoryOptions | null)): (string | undefined)}, StatSyncFn: StatSyncFn, read: {<TBuffer extends NodeJS.ArrayBufferView>(fd: number, buffer: TBuffer, offset: number, length: number, position: (ReadPosition | null), callback: (err: (NodeJS.ErrnoException | null), bytesRead: number, buffer: TBuffer) => void): void}, chown: {(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void}, StatOptions: StatOptions, opendirSync(path: PathLike, options?: OpenDirOptions): Dir, StatSyncOptions: StatSyncOptions, fsyncSync(fd: number): void, chmodSync(path: PathLike, mode: Mode): void, ReadVResult: ReadVResult, opendir: {(path: PathLike, cb: (err: (NodeJS.ErrnoException | null), dir: Dir) => void): void, (path: PathLike, options: OpenDirOptions, cb: (err: (NodeJS.ErrnoException | null), dir: Dir) => void): void}, Stats: Stats, fstatSync: {(fd: number, options?: (StatOptions & {bigint?: false | undefined})): Stats, (fd: number, options: (StatOptions & {bigint: true})): BigIntStats, (fd: number, options?: StatOptions): (Stats | BigIntStats)}, symlinkSync(target: PathLike, path: PathLike, type?: (symlink.Type | null)): void, appendFile: {(path: PathOrFileDescriptor, data: (string | Uint8Array), options: WriteFileOptions, callback: NoParamCallback): void, (file: PathOrFileDescriptor, data: (string | Uint8Array), callback: NoParamCallback): void}, readlink: {(path: PathLike, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), linkString: string) => void): void, (path: PathLike, options: BufferEncodingOption, callback: (err: (NodeJS.ErrnoException | null), linkString: Buffer) => void): void, (path: PathLike, options: EncodingOption, callback: (err: (NodeJS.ErrnoException | null), linkString: (string | Buffer)) => void): void, (path: PathLike, callback: (err: (NodeJS.ErrnoException | null), linkString: string) => void): void}, BufferEncodingOption: "buffer" | {encoding: "buffer"}, rmSync(path: PathLike, options?: RmOptions): void, link: {(existingPath: PathLike, newPath: PathLike, callback: NoParamCallback): void}, utimes: {(path: PathLike, atime: TimeLike, mtime: TimeLike, callback: NoParamCallback): void}, lchmodSync(path: PathLike, mode: Mode): void, rmdirSync(path: PathLike, options?: RmDirOptions): void, fsync: {(fd: number, callback: NoParamCallback): void}, RmDirOptions: RmDirOptions, watchFile: {(filename: PathLike, options: ((WatchFileOptions & {bigint?: false | undefined}) | undefined), listener: (curr: Stats, prev: Stats) => void): StatWatcher, (filename: PathLike, options: ((WatchFileOptions & {bigint: true}) | undefined), listener: (curr: BigIntStats, prev: BigIntStats) => void): StatWatcher, (filename: PathLike, listener: (curr: Stats, prev: Stats) => void): StatWatcher}, readv: {(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, cb: (err: (NodeJS.ErrnoException | null), bytesRead: number, buffers: NodeJS.ArrayBufferView[]) => void): void, (fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position: number, cb: (err: (NodeJS.ErrnoException | null), bytesRead: number, buffers: NodeJS.ArrayBufferView[]) => void): void}, ReadStream: ReadStream, fchownSync(fd: number, uid: number, gid: number): void, chmod: {(path: PathLike, mode: Mode, callback: NoParamCallback): void}, writeFile: {(file: PathOrFileDescriptor, data: (string | NodeJS.ArrayBufferView), options: WriteFileOptions, callback: NoParamCallback): void, (path: PathOrFileDescriptor, data: (string | NodeJS.ArrayBufferView), callback: NoParamCallback): void}, lutimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void, MakeDirectoryOptions: MakeDirectoryOptions, ReadPosition: number | bigint, utimesSync(path: PathLike, atime: TimeLike, mtime: TimeLike): void, lstat: {(path: PathLike, callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (path: PathLike, options: ((StatOptions & {bigint?: false | undefined}) | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: Stats) => void): void, (path: PathLike, options: (StatOptions & {bigint: true}), callback: (err: (NodeJS.ErrnoException | null), stats: BigIntStats) => void): void, (path: PathLike, options: (StatOptions | undefined), callback: (err: (NodeJS.ErrnoException | null), stats: (Stats | BigIntStats)) => void): void}, Mode: number | string, createWriteStream(path: PathLike, options?: (BufferEncoding | StreamOptions)): WriteStream, mkdtempSync: {(prefix: string, options?: EncodingOption): string, (prefix: string, options: BufferEncodingOption): Buffer, (prefix: string, options?: EncodingOption): (string | Buffer)}, cpSync(source: string, destination: string, opts?: CopyOptions): void, fchown: {(fd: number, uid: number, gid: number, callback: NoParamCallback): void}, appendFileSync(path: PathOrFileDescriptor, data: (string | Uint8Array), options?: WriteFileOptions): void, OpenDirOptions: OpenDirOptions, openSync(path: PathLike, flags: OpenMode, mode?: (Mode | null)): number, OpenMode: number | string, accessSync(path: PathLike, mode?: number): void, unlink: {(path: PathLike, callback: NoParamCallback): void}, futimesSync(fd: number, atime: TimeLike, mtime: TimeLike): void, writevSync(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position?: number): number, lchown: {(path: PathLike, uid: number, gid: number, callback: NoParamCallback): void}, ftruncateSync(fd: number, len?: (number | null)): void, writev: {(fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, cb: (err: (NodeJS.ErrnoException | null), bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void): void, (fd: number, buffers: ReadonlyArray<NodeJS.ArrayBufferView>, position: number, cb: (err: (NodeJS.ErrnoException | null), bytesWritten: number, buffers: NodeJS.ArrayBufferView[]) => void): void}}}
 */
const fs = require("fs");

module.exports = {
  files: '*',
  ignore: ['public', '.gitignore', 'node_modules'],
  callbacks: {
    ready: function (err, browserSync) {
      const content_404 = fs.readFileSync('public/404.html');

      browserSync.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.writeHead(404, {"Content-Type": "text/html; charset=UTF-8"});
        res.write(content_404);
        res.end();
      });
    },
  },
  ui: false,
  ghostMode: false,
  snippet: true,
  notify: true,
  port: process.env.SERVER_PORT || 3000,
};
